import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/TodoRoutes.js";

const app = express();

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

app.use("/api/v1/items", route);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
