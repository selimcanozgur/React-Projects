import { Item } from "../models/TodoModel.js";

export async function GetAllItem(req, res) {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "success",
      size: items.length,
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function CreateItem(req, res) {
  try {
    await Item.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Successfully created",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DeleteItem(req, res) {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.status(200).json({
      message: "Item deleted",
    });
  } catch (error) {}
}
