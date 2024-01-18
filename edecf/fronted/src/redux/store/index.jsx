import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./../slices/ProductSlice";
export default configureStore({
  reducer: {
    product: productReducer,
  },
});
