import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state) => state.value += 1,
        decremented: (state) => state.value >= 0 ? state.value += 1 : state,
        reset: (state) => state.value = initialState.value,
    },
})

export const { incremented, decremented, reset } = counterSlice.actions

export default counterSlice.reducer;