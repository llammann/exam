const express = require("express");
const router = express.Router();
const FoodControllers = require("./../controllers/FoodController");
router.get("/foods", FoodControllers.getAllFood);
router.delete("/foods/:id", FoodControllers.deleteFood);
router.post("/foods", FoodControllers.postFood);

module.exports = router;
