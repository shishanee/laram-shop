import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import catalog from '../features/catalogSlice'


export const store = configureStore({
  reducer: {
    application,
    catalog
    
  },
});
