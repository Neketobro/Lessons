import { createSlice } from "@reduxjs/toolkit";
import { FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from "./todos.action";

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
            .addCase(FETCH_TODOS_ERROR, (state, { payload }) => {
                state.status = "error";
                state.error = payload;
            });
    },
})

export default todosSlice.reducer;

export const { addTodo } = todosSlice.actions;
export const { selectTodos, selectStatus } = todosSlice.selectors;