import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.qty > 1) {
          itemInCart.qty--;
        } else {
          state.data = state.data.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const cartToggle = createSlice({
  name: "cartPageToggle",
  initialState: false,
  reducers: {
    cartToggleAction: (state) => {
      return !state;
    },
  },
});
export const { cartToggleAction } = cartToggle.actions;

export const { removeFromCart } = cartSlice.actions;
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
