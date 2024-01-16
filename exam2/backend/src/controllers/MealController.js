const Meal = require("./../models/MealModel");

// GET
const getAllUsers = async (req, res) => {
  let allUsers = await Meal.find({});
  res.send(allUsers);
  console.log("GET MEALS");
};

// DELETE
const deleteMeal = async (req, res) => {
  let _id = req.params.id;
  
  await Meal.findByIdAndDelete(_id);
  console.log("Delete MEAL");
};

// POST
const postMeal = async (req, res) => {
  const newMeal = new Meal(req.body);
  newMeal.save();
  console.log("POST MEAL");
};

module.exports = {
  getAllUsers,
  deleteMeal,
  postMeal,
};
