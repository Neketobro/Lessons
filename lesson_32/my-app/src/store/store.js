import appReducer from "./app/app.slice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});