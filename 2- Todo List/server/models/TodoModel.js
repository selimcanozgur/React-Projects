import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export const Item = mongoose.model("todo", todoSchema);
