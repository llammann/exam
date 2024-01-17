const Food = require("./../models/FoodModel");

// GET
const getAllFood = async (req, res) => {
  const allFood = await Food.find({});
  res.send(allFood);
  console.log("GET FOOD");
};

// DELETE
const deleteFood = async (req, res) => {
  const _id = req.params.id;

  await Food.findByIdAndDelete(_id);
  console.log("DELETE FOOD");
};

// DELETE
const postFood = async (req, res) => {
  const newFood = new Food(req.body);

  newFood.save();
  console.log("POST FOOD");
};

module.exports = { getAllFood, deleteFood, postFood };
