import express from "express";
import path from "path";
import logger from "morgan";
import cors from "cors";
import menuRouter from "./routes/menus";
import orderRouter from "./routes/orders";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env["PORT"] || 8888;

app.get("/", (_req, res) => res.send("Welcome to your frontend coding test!"));

app.use("/menus", menuRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
