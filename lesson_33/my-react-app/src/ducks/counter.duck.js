import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state) => {
            state.value = state.value + 1
        },
        decremented: (state) => {
            state.value > 0 ? state.value = state.value - 1 : state.value
        }, 
        reset: (state) => {
            state.value = initialState.value
        },
    },
    selectors: {
        selectCounter: (state) => state.value,
    }
})

export const { incremented, decremented, reset } = counterSlice.actions;
export const { selectCounter } = counterSlice.selectors;

export default counterSlice.reducer;