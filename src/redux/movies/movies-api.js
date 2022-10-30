// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const setURL = string => {
    return `${string}?api_key=${API_KEY}`;
  };
// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
          url: setURL('/trending/movie/day'),
        //   method: 'GET',
        //   body:
      }),
    }),
  }),
})

export const {useGetMoviesQuery, useLazyGetMoviesQuery} = moviesApi
