import express from "express";
import dotenv from "dotenv";
import route from "./routes/menuRoutes.js";

const app = express();
dotenv.config({ path: "./config.env" });
app.use(express.json());

app.use("/api/v1/menu", route);

export default app;
