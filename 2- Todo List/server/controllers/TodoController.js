import { Item } from "../models/TodoModel.js";

export async function GetAllItem(req, res) {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "success",
      data: items,
    });
  } catch (err) {
    console.log(err);
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
