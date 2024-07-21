import { configureStore, createSlice } from "@reduxjs/toolkit";

const stateAwal = {
    login: false,
    cart: [],
    total: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState: stateAwal.cart,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
    name: "login",
    initialState: stateAwal.login,
    reducers: {
        createSession(){
            return true
        }
    }
});

const penjumlahan = createSlice({
    name: "penjumlahan",
    initialState: stateAwal.total,
    reducers: {
        plus(state){
            return state + 1;
        },
        minus(state){
            return state - 1;
        }
    }
});

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    total: penjumlahan.reducer,
  },
});

console.log("on create store : ", store.getState());

store.subscribe(() => {
    console.log("store change: ", store.getState());
});

store.dispatch(loginSlice.actions.createSession());
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(penjumlahan.actions.plus());
store.dispatch(penjumlahan.actions.minus());