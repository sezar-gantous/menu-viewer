import { Category } from ".prisma/client";
import _ from "lodash";
import prisma from "../../db";

export class ProductsController {
  private static db = prisma.product;

  static isSameMenu = async (productIds: number[]): Promise<boolean> => {
    const products = await ProductsController.db.findMany({
      select: {
        category: true,
      },
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (productIds.length !== products.length) {
      console.info("Length of ids and found products did not match");
      return false;
    }

    const categories = _.uniqBy(products, _.property("category.id")).map(
      _.property<{ category: Category }, Category>("category")
    );

    const menuIds = _.uniq(
      categories.map(_.property<Category, number>("menuId"))
    );

    return menuIds.length === 1;
  };
}
