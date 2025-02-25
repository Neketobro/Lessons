import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ducks/counter.duck.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})