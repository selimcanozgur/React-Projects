import express from "express";
import {
  createFood,
  getAllFood,
  getOneFood,
} from "../controllers/menuController.js";

const Route = express.Router();

Route.get("/", getAllFood);
Route.get("/:id", getOneFood);
Route.post("/", createFood);

export default Route;
