import { validationResult } from "express-validator";
import { Router } from "express";
import { OrderController } from "../../controllers/orders";
import { HttpStatus } from "../../constants/httpStatus";
import _ from "lodash";

const orderRouter = Router();
const orderController = new OrderController();

// Get all orders
orderRouter.get("/", async (_req, res) => {
  const orders = await orderController.getAllOrders();
  return res.json(orders);
});

// Get 1 order
orderRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const parsedId = Number.parseInt(id, 10);

  const matchingOrder = await orderController.getOrderById(parsedId);

  if (!matchingOrder) {
    return res.status(HttpStatus.NOT_FOUND).end();
  }

  return res.json(matchingOrder);
});

orderRouter.post(
  "/",
  ...orderController.validatePostOrderBody(),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }

    try {
      const createdOrder = await orderController.createOrder(req.body);
      return res.json(createdOrder);
    } catch (error: unknown) {
      if (_.isError(error)) {
        console.error("Error while trying to create an order", error);
        return res
          .status(HttpStatus.UNPROCESSABLE_ENTITY)
          .json({ message: error.message });
      }

      return res.status(HttpStatus.BAD_REQUEST).end();
    }
  }
);

export default orderRouter;
