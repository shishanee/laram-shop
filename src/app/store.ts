import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import cart from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    application,
    cart,
  },
});
