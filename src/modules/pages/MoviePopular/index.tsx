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

const MoviePopular = () => {
  const {
    movies,
    finalPage,
    query,
    setQuery,
    handleShowMovies,
    handleUpdateMovies,
  } = useContext(MoviesContext);

  const history = useHistory();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  const scrollObserver = useRef<IntersectionObserver>();

  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (scrollObserver.current) scrollObserver.current.disconnect();

      scrollObserver.current = new IntersectionObserver(async entries => {
        if (entries[0].isIntersecting) {
          setPage(state => state + 1);
        }
      });

      if (node) scrollObserver.current.observe(node);
    },
    [setPage, loading],
  );

  useEffect(() => {
    setQuery('');
  }, [setQuery]);

  useEffect(() => {
    if (page === 1) {
      handleShowMovies(page);
      setFirstLoad(true);
    }
  }, [page, handleShowMovies, setQuery]);

  useEffect(() => {
    if (page > 1 && page <= finalPage) {
      handleUpdateMovies(page);
    }
  }, [page, finalPage, handleUpdateMovies]);

  useEffect(() => {
    if (query.length > 0 && firstLoad === true) {
      history.push(`/movies/searched/${query}`);
    }
  }, [query, history, firstLoad]);

  return (
    <>
      <Header logo />
      <S.Container>
        <S.MostPopularContainer>
          {movies.map(movie => (
            <Link
              key={movie.id}
              ref={lastMovieElementRef}
              to={`/movies/${movie.id}`}
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

export default MoviePopular;
