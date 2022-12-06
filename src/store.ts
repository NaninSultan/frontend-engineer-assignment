import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/search/searchSlice';
import resultsListReducer from '../src/features/resultsList/resultsListSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    resulstsList: resultsListReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch