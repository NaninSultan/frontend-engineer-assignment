import { createSlice } from "@reduxjs/toolkit";
import { Details } from "../../@types";

interface ResultsList {
    cards: Details[];
    loader: boolean
}

export const initialState: ResultsList = {
    cards: [],
    loader: true
}

export const resulstListSLice = createSlice({
    name: 'resulstListSLice',
    initialState,
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        },
        setLoader: (state, action) => {
            state.loader = action.payload
        }
    }
});

export const { setCards, setLoader } = resulstListSLice.actions;

export default resulstListSLice.reducer;