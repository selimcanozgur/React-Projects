import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.port || 3000;
const md_uri = process.env.MD_URI;

mongoose
  .connect(md_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening port to: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
