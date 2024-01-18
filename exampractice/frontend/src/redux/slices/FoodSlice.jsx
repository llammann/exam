import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllFood = createAsyncThunk(
  "food/getAllfood",
  async (_, { dispatch }) => {
    const response = await axios.get("http://localhost:7070/foods");
    return response.data;
  }
);

let wishlist;
if (localStorage.getItem("wishlist")) {
  wishlist = JSON.parse(localStorage.getItem("wishlist"));
} else {
  localStorage.setItem("wishlist", JSON.stringify([]));
}

// basket
let basket;
if (localStorage.getItem("basket")) {
  wishlist = JSON.parse(localStorage.getItem("basket"));
} else {
  localStorage.setItem("basket", JSON.stringify([]));
}

const initialState = {
  value: 0,
  data: [],
  error: null,
  wishlist: wishlist,
  basket: basket,
};

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    handleWishlist: (state, action) => {
      // console.log("wishlist", current(state.wishlist));
      let find = state.wishlist.find((wish) => wish === action.payload);
      if (find !== undefined) {
        state.wishlist = state.wishlist.filter(
          (wish) => wish !== action.payload
        );
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    handleBasket: (state, action) => {
      console.log("action.payload basket :", action.payload);
      const find = state.basket.find((elem) => elem._id == action.payload._id);
      if (find !== undefined) {
        find.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllFood.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log("state.data :", state.data);
    });
  },
});

// Action creators are generated for each case reducer function
export const { handleWishlist, handleBasket } = FoodSlice.actions;

export default FoodSlice.reducer;
