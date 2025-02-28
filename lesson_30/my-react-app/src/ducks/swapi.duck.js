import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    swapi: [],
}

const swapiSlice = createSlice({
    name: "swapi",
    initialState,
    reducers: {
        addSwap: (state, { payload }) => {
            console.log(state.swapi);
            console.log(payload);
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
        selectSwapi: (state) => state.users,
        selectStatus: (state) => state.status,
    },
})

export const fetchSwapi = createAsyncThunk(
    'swapi/fetchswapi',
    async (_, { signal, rejectedWithValue }) => {
        try {
            const response = await fetch(procces.env.SWAPI_BASE_URL, { signal });

            return response.map(({ people }) => {
                people
            })
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

export const { addSwap } = swapiSlice.actions;
export const { selectSwapi, selectStatus } = swapiSlice.selectors;
export default swapiSlice.reducer;