import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    status: null,
    error: null,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    selectors: {}
})

export default todosSlice.reducer;

export const { } = todosSlice.actions;
export const { } = todosSlice.selectors;


