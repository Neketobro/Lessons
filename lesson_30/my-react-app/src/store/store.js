import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "../ducks/swapi.duck.js";

export const store = configureStore({
    reducer: {
        swapi: swapiReducer, 
    }
})