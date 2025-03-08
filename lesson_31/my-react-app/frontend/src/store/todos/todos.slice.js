import { createSlice } from "@reduxjs/toolkit";
import {
    FETCH_TODOS_ERROR,
    FETCH_TODOS_LOADING,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_POST,
    FETCH_TODOS_POST_SUCCESS,
    FETCH_TODOS_DELETE_TODO,
    FETCH_TODOS_DELETE_ERROR,
    FETCH_TODOS_DELETE_SUCCESS
} from "./todos.action.js";

const initialState = {
    value: [],
    status: null,
    error: null,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            state.value.push(payload);
        }
    },
    selectors: {
        selectTodos: (state) => state.value,
        selectStatus: (state) => state.status,
    },
    extraReducers: (builder) => {
        builder
            .addCase(FETCH_TODOS_LOADING, (state) => {
                state.status = "loading";
            })
            .addCase(FETCH_TODOS_SUCCESS, (state, { payload }) => {
                state.status = "success";
                state.value = payload;
            })
            .addCase(FETCH_TODOS_POST, (state, { payload }) => {
                state.status = "loading";
                state.value.push(payload);
            })
            .addCase(FETCH_TODOS_POST_SUCCESS, (state) => {
                state.status = "success";
            })
            .addCase(FETCH_TODOS_ERROR, (state, { payload }) => {
                state.status = "error";
                state.error = payload;
            })
            .addCase(FETCH_TODOS_DELETE_TODO, (state, { payload }) => {
                state.value = [...state.value].filter(({ id }) => id !== payload);
                state.status = "loading";
            })
            .addCase(FETCH_TODOS_DELETE_SUCCESS, (state) => {
                state.status = "success";
            })
            .addCase(FETCH_TODOS_DELETE_ERROR, (state, { payload }) => {
                state.status = "error";
                state.error = payload;
            });
    },
})

export default todosSlice.reducer;

export const { addTodo } = todosSlice.actions;
export const { selectTodos, selectStatus } = todosSlice.selectors;

// ase DELETE_TODO_SUCCESS:
//     return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.payload)
//     };