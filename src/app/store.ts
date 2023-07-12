import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";

import catalog from '../features/catalogSlice'


import cart from "../features/cartSlice";
import clothes from "../features/clothesSlice";

import orders from "../features/ordersSlice";


export const store = configureStore({
  reducer: {
    application,
    catalog,
    cart,
    clothes,
    orders
  },
});
