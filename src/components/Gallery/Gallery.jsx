import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLazyGetMoviesQuery } from 'redux/movies/movies-api';
// import { fetchMovies } from 'redux/movies/moviesOperations';
import { selectMoviesByGenreApi } from 'redux/movies/moviesSelectors';

export const Gallery = () => {
  // const dispatch = useDispatch();
  // const items = useSelector(selectMoviesByGenre);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  const [fetchMovies, { data }] = useLazyGetMoviesQuery();
  const items = data?.results;
  const movies = useSelector(state => selectMoviesByGenreApi(state, items));
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <ul
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        width: '100vw',
        padding: '0',
      }}
    >
      {movies?.map(item => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
          <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Title>{item.title || item.original_title}</Card.Title>
            <Card.Text style={{ flex: '1 0 auto' }}>{item.overview}</Card.Text>
            <Button
              style={{ minWidth: '200px', alignSelf: 'center' }}
              variant="primary"
            >
              Popularity {item.vote_average} / {item.vote_count}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};
