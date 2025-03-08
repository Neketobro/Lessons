import { createSlice } from "@reduxjs/toolkit";
import {
    FETCH_TODOS_ERROR,
    FETCH_TODOS_LOADING,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_POST_SUCCESS,
    FETCH_TODOS_DELETE_SUCCESS,
    FETCH_TODOS_CHANGE_SUCCESS,
    FETCH_TODOS_CHECK_SUCCESS
} from "./todos.action.js";

const initialState = {
    value: [],
    status: null,
    error: null,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
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
            .addCase(FETCH_TODOS_POST_SUCCESS, (state, { payload }) => {
                state.status = "success";
                state.value.push(payload);
            })
            .addCase(FETCH_TODOS_ERROR, (state, { payload }) => {
                state.status = "error";
                state.error = payload;
            })
            .addCase(FETCH_TODOS_DELETE_SUCCESS, (state, { payload }) => {
                state.value = [...state.value].filter(({ id }) => id !== payload);
                state.status = "success";
            })
            .addCase(FETCH_TODOS_CHANGE_SUCCESS, (state) => {
                state.status = "success";
            })
            .addCase(FETCH_TODOS_CHECK_SUCCESS, (state) => {
                state.status = "success";
            });
    },
})

export default todosSlice.reducer;

export const { selectTodos, selectStatus } = todosSlice.selectors;