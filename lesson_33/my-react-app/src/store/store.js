import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ducks/counter.duck.js";
import todoListReducer from "../ducks/todo.duck.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todoList: todoListReducer,
    }
})