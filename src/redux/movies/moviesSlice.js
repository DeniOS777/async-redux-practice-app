import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './moviesOperations';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  // reducers: {
  //   setGanres: (state, action) => {
  //   }
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
        state.isLoading = false;
      })
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
