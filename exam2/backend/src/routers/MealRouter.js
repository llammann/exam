const MealControllers = require("./../controllers/MealController");

const express = require("express");
const router = express.Router();

router.get("/meals", MealControllers.getAllUsers);
router.delete("/meals/:id", MealControllers.deleteMeal);
router.post("/meals", MealControllers.postMeal);

module.exports = router;
