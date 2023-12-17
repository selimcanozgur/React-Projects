import express from "express";
import { GetAllItem, CreateItem } from "../controllers/TodoController.js";

const route = express.Router();

route.get("/", GetAllItem);
route.post("/", CreateItem);

export default route;
