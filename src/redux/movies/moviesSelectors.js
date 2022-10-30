export const selectMovies = state => state.movies.movies;

export const selectGenre = state => state.movies.genre;

export const selectMoviesByGenre = state => {
  const movies = selectMovies(state);
  const genre = selectGenre(state);
  return genre
    ? movies.filter(movie => movie.genre_ids.includes(genre))
    : movies;
};
