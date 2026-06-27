import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  }
});

export default store;