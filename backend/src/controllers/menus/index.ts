import type { Menu } from "@prisma/client";
import prisma from "../../db";

export class MenuController {
  private static db = prisma.menu;

  /**
   * Gets all the menus from the database
   * @returns a promise for a list of all the menus
   */
  getAllMenus = async (): Promise<Menu[]> => {
    return MenuController.db.findMany({
      include: {
        categories: {
          include: {
            products: true,
          },
        },
      },
    });
  };

  /**
   *
   * @param id the id of the menu to get
   * @returns A promise for the found menu or resolves to null if no menu is found
   */
  getMenuById = async (id: number): Promise<Menu | null> => {
    if (id < 0) {
      throw new Error("Invalid ID");
    }

    return MenuController.db.findUnique({
      where: {
        id,
      },
      include: {
        categories: {
          include: {
            products: true,
          },
        },
      },
    });
  };
}
