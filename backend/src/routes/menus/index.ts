import { Router } from "express";
import { HttpStatus } from "../../constants/httpStatus";
import { MenuController } from "../../controllers/menus";

const menuRouter = Router();
const menuController = new MenuController();

// Get all menus
menuRouter.get("/", async (_req, res) => {
  const menus = await menuController.getAllMenus();
  return res.json(menus);
});

// Get menu by ID
menuRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const parsedId = Number.parseInt(id, 10);

  const matchingMenu = await menuController.getMenuById(parsedId);

  if (!matchingMenu) {
    res.status(HttpStatus.NOT_FOUND);
    return res.end();
  }

  return res.json(matchingMenu);
});

export default menuRouter;
