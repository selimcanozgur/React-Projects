import express from "express";
import {
  GetAllItem,
  CreateItem,
  DeleteItem,
} from "../controllers/TodoController.js";

const route = express.Router();

route.get("/", GetAllItem);
route.post("/", CreateItem);
route.delete("/:id", DeleteItem);

export default route;
