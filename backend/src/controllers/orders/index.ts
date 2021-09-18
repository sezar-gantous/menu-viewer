import { Order } from "@prisma/client";
import { body, ValidationChain } from "express-validator";
import _ from "lodash";
import prisma from "../../db";
import { isProductQuantity } from "./util";
import { ProductQuantity } from "../../types/orders/productQuantity";
import { ProductsController } from "../products";

const INCLUDE_SCHEMA = Object.freeze({
  products: {
    select: {
      product: true,
      quantity: true,
    },
  },
});

export class OrderController {
  private static db = prisma.order;

  /**
   * Gets all the orders from the database
   *
   * @returns a promise with a list of orders
   */
  getAllOrders = async (): Promise<Order[]> =>
    OrderController.db.findMany({
      include: INCLUDE_SCHEMA,
    });

  /**
   * Gets an order by a specific id
   * @param id the id of the order to get
   * @returns A promise for the requested order or null if no such order exists
   */
  getOrderById = async (id: number): Promise<Order | null> => {
    if (id < 0) {
      throw new Error("Invalid id");
    }

    return OrderController.db.findUnique({
      where: {
        id,
      },
      include: INCLUDE_SCHEMA,
    });
  };

  /**
   * Creates a new order in the database.
   *
   * @param orderData the data from the request body
   * @returns a promise with the newly created order
   */
  createOrder = async (orderData: {
    products: ProductQuantity[];
    tax: number;
    notes?: string;
  }): Promise<Order> => {
    const newOrder = _.pick(orderData, ["tax", "notes", "products"]);

    const productIds = newOrder.products.map((p) => p.productId);
    const sameMenu = await ProductsController.isSameMenu(productIds);

    if (!sameMenu) {
      throw new Error("The products should be of the same menu");
    }

    return OrderController.db.create({
      data: {
        ...newOrder,
        products: {
          create: newOrder.products,
        },
      },
      include: INCLUDE_SCHEMA,
    });
  };

  /**
   * Validates the body from an incoming POST request to create an order.
   *
   * @returns A validation chain that is used as request middleware to validate the input
   */
  validatePostOrderBody = (): ValidationChain[] => {
    return [
      body("tax").isNumeric(),
      body("products")
        .isArray()
        .custom((values: unknown[]) => {
          if (!values.every((val) => isProductQuantity(val))) {
            throw new Error(
              "`products` should contain objects of form { productId: int, quantity?: int }"
            );
          }

          const productIds = (values as ProductQuantity[]).map(
            (val) => val.productId
          );

          if (_.uniq(productIds).length !== productIds.length) {
            throw new Error("`products` contained duplicate product ids");
          }

          const quantities = (values as ProductQuantity[]).map(
            (val) => val.quantity
          );

          if (!quantities.every((q) => q === undefined || (q > 0 && q <= 20))) {
            throw new Error("Quantities should be at least 1 and at most 20");
          }

          return true;
        }),
      body("notes").optional().isString(),
    ];
  };
}
