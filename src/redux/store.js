import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './movies/movies-api';
import { moviesSlice } from './movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch)
