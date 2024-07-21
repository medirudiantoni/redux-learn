import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qtt: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(cartReducer);
console.log("on create store : ", store.getState());

// subscribe > untuk melihat perubahan
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qtt: 40 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 3, qtt: 60 } };
store.dispatch(action2);
