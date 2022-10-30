import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const instanceMoviesAxios = axios.create({
  baseURL: BASE_URL,
});

const setURL = string => {
  return `${string}?api_key=${API_KEY}`;
};

export const getMovies = async () => {
  const { data } = await instanceMoviesAxios(setURL('/trending/movie/day'));
  return data.results;
};
