import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    swapi: {},
}

const swapiSlice = createSlice({
    name: "swapi",
    initialState,
    reducers: {
        searchSwapi: (state, { payload }) => {
            console.log(payload.text);
        },
        clearSwapi: (state) => {
            state.swapi = initialState.swapi;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSwapi.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchSwapi.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.swapi = payload;
        })
        builder.addCase(fetchSwapi.rejected, (state, { payload }) => {
            state.status = 'error';
            state.error = payload;
        })
    },
    selectors: {
        selectSwapi: (state) => state.swapi,
        selectStatus: (state) => state.status,
    },
})

export const fetchSwapi = createAsyncThunk(
    'swapi/fetchswapi',
    async (_, { signal, rejectedWithValue }) => {
        try {
            const response = await fetch(import.meta.env.VITE_SWAPI_BASE_URL, { signal });
            const data = await response.json();

            return data;
        } catch (e) {
            rejectedWithValue(e.message ?? 'Ups, failed to fetch swapi')
        }
    },
    {
        condition(_, { getState }) {
            const {
                swapi: { status },
            } = getState();
            if (status === "loading") return false;
            return true
        }
    }
)

export const { clearSwapi, searchSwapi } = swapiSlice.actions;
export const { selectSwapi, selectStatus } = swapiSlice.selectors;
export default swapiSlice.reducer;