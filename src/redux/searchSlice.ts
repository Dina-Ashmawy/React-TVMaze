import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SearchState {
  lastSearches: string[];
  searchTerm: string;
}

const initialState: SearchState = {
  lastSearches: [],
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addLastSearch(state, action: PayloadAction<string>) {
      const newSearches = [action.payload, ...state.lastSearches.slice(0, 4)];
      state.lastSearches = newSearches;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addLastSearch, setSearchTerm } = searchSlice.actions;

export const selectLastSearches = (state: RootState) =>
  state.search.lastSearches;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;

export default searchSlice.reducer;
