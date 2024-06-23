import showsReducer from './showsSlice';
import searchReducer from './searchSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import tvMazeApi from '../services/tvMazeService';

export const store = configureStore({
  reducer: {
    [tvMazeApi.reducerPath]: tvMazeApi.reducer,
    shows: showsReducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvMazeApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
