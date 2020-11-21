/* eslint-disable camelcase */
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import { MoviesContext } from '../../../shared/context/MoviesContext';

import Header from '../../../shared/components/Header';
import MovieCard from '../../../shared/components/MovieCard';

import * as S from './styles';

const Home = () => {
  const { movies, finalPage, handlePopularMovies } = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const observer = useRef<IntersectionObserver>();

  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(async entries => {
        if (entries[0].isIntersecting) {
          setPage(state => state + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [setPage, loading],
  );

  useEffect(() => {
    console.log(page);
    handlePopularMovies(page);
  }, [handlePopularMovies, page]);

  return (
    <S.Container>
      <Header logo />
      <S.MostPopularContainer>
        {movies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            ref={lastMovieElementRef}
          >
            <MovieCard
              title={movie.title}
              image={movie.image}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </S.MostPopularContainer>
    </S.Container>
  );
};

export default Home;
