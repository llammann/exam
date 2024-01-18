import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "food/gettAllProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  }
);

export const foodSlice = createSlice({
  name: "product",
  initialState: {
    value: 0,
    data: [],
    basket: [],
    wishlist: [],
  },
  reducers: {
    handleWishlist: (state, action) => {
      let find = current(state.wishlist).find(
        (wish) => wish._id === action.payload._id
      );
      if (find) {
        state.wishlist = current(state.wishlist).filter(
          (elem) => elem._id != action.payload._id
        );
      } else {
        state.wishlist = [...state.wishlist, action.payload];
      }
      console.log("wishlistSTATE", state.wishlist);
    },

    handleBasket: (state, action) => {
      let find = current(state.basket).find(
        (bas) => bas._id === action.payload._id
      );

      if (!find) {
        const newProd = { ...action.payload, count: 1 };
        state.basket = [...state.basket, newProd];
        console.log("basket find", find);
      } else {
        state.basket = state.basket.map((elem) => {
          if (elem._id == action.payload._id) {
            return { ...action.payload, count: (elem.count += 1) };
          }
          return elem;
        });
      }
    },
    handleMinus: (state, action) => {
      state.basket = [
        ...state.basket.map((elem) => {
          if (elem._id == action.payload?._id) {
            elem.count -= 1;
            return elem;
          }
          return elem;
        }),
      ];
    },

    handlePlus: (state, action) => {
      state.basket = state.basket.map((elem) => {
        if (elem._id == action.payload?._id) {
          return { ...elem, count: (elem.count += 1) };
        }
        return elem;
      });
    },

    handleDelete: (state, action) => {
      state.basket = state.basket.filter(
        (bas) => bas._id !== action.payload._id
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log("state", state.data);
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  handleWishlist,
  handleBasket,
  handlePlus,
  handleMinus,
  handleDelete,
} = foodSlice.actions;

export default foodSlice.reducer;
