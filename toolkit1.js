import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART")

// const initialState = {
//     cart: []
// }

// const cartReducer = createReducer(initialState, (builder) => {

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("on create store : ", store.getState());

store.subscribe(() => {
    console.log("store change: ", store.getState());
})

const action1 = addToCart({ id: 1, qty: 20 });
const action2 = addToCart({ id: 2, qty: 40 });
store.dispatch(action1);
store.dispatch(action2);
