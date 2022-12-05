import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchProps {
    search: string,
    showSearch: boolean
}

export const initialState: SearchProps = {
    search: '',
    showSearch: false
}

export const pickupInputSlice = createSlice({
    name: 'pickupInput',
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        },
        showSearch: (state, action) => {
            state.showSearch = action.payload
        }
    }
});

export const { search, showSearch } = pickupInputSlice.actions;

export default pickupInputSlice.reducer;