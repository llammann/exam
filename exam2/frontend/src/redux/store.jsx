import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/MealSlice";
export default configureStore({
  reducer: {
    meal: mealReducer,
  },
});
