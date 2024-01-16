const mongoose = require("mongoose");

const MealSchema =new mongoose.Schema(
  {
    name: String,
    id: Number,
    products: [],
    image: String,
  },
  {
    collection: "Meals",
    timestamps: true,
  }
);

const Meal = mongoose.model("Meals", MealSchema);

module.exports = Meal;
