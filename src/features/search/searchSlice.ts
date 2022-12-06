import { createSlice } from "@reduxjs/toolkit";

interface SearchProps {
    search: string,
    showSearch: boolean,
    toggle: string
}

export const initialState: SearchProps = {
    search: '',
    showSearch: false,
    toggle: 'tv'
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
        },
        setToggle: (state, action) => {
            state.toggle = action.payload
        }
    }
});

export const { search, showSearch, setToggle } = pickupInputSlice.actions;

export default pickupInputSlice.reducer;