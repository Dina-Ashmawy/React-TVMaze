import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Show } from '../interfaces';
import { RootState } from './store';

interface ShowsState {
  favoriteShows: string[];
  filteredShows: Show[];
}

const initialState: ShowsState = {
  favoriteShows: [],
  filteredShows: [],
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setFavoriteShows: (state, action: PayloadAction<string[]>) => {
      state.favoriteShows = action.payload;
    },
    setFilteredShows: (state, action: PayloadAction<Show[]>) => {
      state.filteredShows = action.payload;
    },
  },
});

export const { setFavoriteShows, setFilteredShows } = showsSlice.actions;

export const selectFavoriteShows = (state: RootState) =>
  state.shows.favoriteShows;
export const selectFilteredShows = (state: RootState) =>
  state.shows.filteredShows;

export default showsSlice.reducer;
