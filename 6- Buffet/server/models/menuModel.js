import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: [true, "You have to enter food"],
    unique: true,
  },
  ingredients: {
    type: String,
    required: [true, "You have to enter ingredients"],
  },
  price: {
    type: Number,
    required: [true, "You have to enter price"],
  },
  photo: {
    type: String,
    default: "",
  },
});

const Menu = mongoose.model("food", menuSchema);

export default Menu;
