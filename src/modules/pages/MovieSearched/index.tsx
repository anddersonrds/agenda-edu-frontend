/* eslint-disable camelcase */
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { MoviesContext } from '../../../shared/context/MoviesContext';

import Header from '../../../shared/components/Header';
import MovieCard from '../../../shared/components/MovieCard';

import * as S from './styles';

const MovieSearched = () => {
  const {
    movies,
    query,
    finalPage,
    handleFindMovies,
    handleUpdateFindMovies,
  } = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
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
    if (page === 1) {
      handleFindMovies(query, page);
    }
  }, [query, page, handleFindMovies]);

  useEffect(() => {
    if (page > 1 && page <= finalPage) {
      handleUpdateFindMovies(query, page);
    }
  }, [query, page, finalPage, handleUpdateFindMovies]);

  useEffect(() => {
    if (query === '') {
      history.push('/');
    }
  }, [query, history]);

  return (
    <>
      <Header back />
      <S.Container>
        <S.MostPopularContainer>
          {movies &&
            movies.map(movie => (
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
    </>
  );
};

export default MovieSearched;
