import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./../slices/FoodSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});
