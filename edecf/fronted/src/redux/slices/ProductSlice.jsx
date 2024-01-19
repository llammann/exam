import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export const getAllProducts = createAsyncThunk(
  "product/gettAllProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId) => {
    const response = await axios.delete(
      `http://localhost:3000/products/${productId}`
    );
    return response.data;
  }
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (newProduct) => {
    const response = await axios.post(
      "http://localhost:3000/products",
      newProduct
    );
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
    deleteWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (bas) => bas._id !== action.payload._id
      );
    },

    handleBasket: (state, action) => {
      let find = current(state.basket).find(
        (bas) => bas._id === action.payload._id
      );

      if (!find) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
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
      let find = state.basket.find((elem) => elem._id == action.payload._id);
      if (find.count > 1) {
        find.count--;
      } else {
        state.basket = state.basket.filter((elem) => elem._id !== find._id);
      }
    },

    handlePlus: (state, action) => {
      let find = state.basket.find((elem) => elem._id == action.payload._id);
      find.count++;
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

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.data = state.data.filter((elem) => elem._id != action.payload);
      console.log("deleted data", state.data);
      // console.log("state", state.data);
    });

    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.data = state.data.push(action.payload);
      console.log("posted data", state.data);
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
  deleteWish,
} = foodSlice.actions;

export default foodSlice.reducer;
