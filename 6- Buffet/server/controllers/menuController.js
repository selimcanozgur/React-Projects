import Menu from "../models/menuModel.js";

const getAllFood = async function (req, res) {
  try {
    const menu = await Menu.find();
    res.status(200).json({
      status: "success",
      size: menu.length,
      menu,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
};

const getOneFood = async function (req, res) {
  try {
    const { id } = req.params;
    const food = await Menu.findById(id);
    res.status(200).json({
      status: "success",
      food,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
};

const createFood = async function (req, res) {
  try {
    await Menu.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Product created",
    });
  } catch (error) {}
};

export { getAllFood, createFood, getOneFood };
