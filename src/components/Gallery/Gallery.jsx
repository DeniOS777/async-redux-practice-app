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

  const [fetchMovies, {data}] = useLazyGetMoviesQuery()
const items = data?.results;
const movies = useSelector((state)=> selectMoviesByGenreApi(state, items))
  useEffect(()=> {
    fetchMovies()
  }, [fetchMovies])

  

  return (
    <ul
      style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', width: '100vw' }}
    >
      {movies?.map(item => (
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w185${item.backdrop_path}`}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};
