import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART")
const login = createAction("CREATE_SESSION")

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, builder => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
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
store.dispatch(login());
