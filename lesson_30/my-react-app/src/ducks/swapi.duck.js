import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSwapi } from '../api/swapi';

const initialState = {
    swapi: {},
    urlway: null,
}
const swapiSlice = createSlice({
    name: "swapi",
    initialState,
    reducers: {
        clearSwapi: (state) => {
            state.swapi = initialState.swapi;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSwapi.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchSwapi.fulfilled, (state, { payload, meta }) => {
            state.status = 'success';
            state.swapi = payload;
            state.urlway = meta.arg;
        })
        builder.addCase(fetchSwapi.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload;
        })
    },
    selectors: {
        selectSwapi: (state) => state.swapi,
        selectStatus: (state) => state.status,
        selectUrlWay: (state) => state.urlway,
    },
})

export default swapiSlice.reducer;

export const { clearSwapi } = swapiSlice.actions;
export const { selectSwapi, selectStatus, selectUrlWay } = swapiSlice.selectors;

export const fetchSwapi = createAsyncThunk(
    'swapi/fetchswapi',
    async (payload, { signal, rejectedWithValue }) => {
        try {
            const response = await getSwapi(payload, signal);

            return response.data;
        } catch (e) {
            rejectedWithValue(e.message ?? 'Ups, failed to fetch swapi')
        }
    },
    {
        condition(payload, { getState }) {
            const {
                swapi: { status },
            } = getState();
            if (status === "loading") return false;
            return true
        }
    }
)