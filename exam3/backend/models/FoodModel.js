const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    ingridients: String,
  },
  {
    collection: "Food",
    timestamps: true,
  }
);

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
