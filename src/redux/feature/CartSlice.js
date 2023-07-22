import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    removeToCart: (state, action) => {
      console.log(action.payload.index);
      const updatedState = state.orders.filter(
        (orders, index) => index !== action.payload.index
      );
      return {
        ...state,
        orders: updatedState,
      };
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
