import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameTodo: [],
}
const tosoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.nameTodo.push(payload);
        },
    },
    selectors: {
        selectTodo: (state) => state.nameTodo
    }
})
export const { selectTodo } = tosoSlice.selectors;
export const { addTodo, deleteTodo, resetAllTodo } = tosoSlice.actions;

export default tosoSlice.reducer;

