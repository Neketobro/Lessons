import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todos.slice.js';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})