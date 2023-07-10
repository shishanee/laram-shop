import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import cart from "../features/cartSlice";
import clothes from "../features/clothesSlice";

export const store = configureStore({
  reducer: {
    application,
    cart,
    clothes,
  },
});
