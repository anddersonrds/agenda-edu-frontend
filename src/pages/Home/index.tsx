/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { MoviesContext } from '../../context/MoviesContext';

import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

import * as S from './styles';

const Home = () => {
  const { movies, handlePopularMovies } = useContext(MoviesContext);

  useEffect(() => {
    if (movies.length === 0) {
      handlePopularMovies();
    }
  }, [handlePopularMovies, movies]);

  return (
    <S.Container>
      <Header logo />
      <S.MostPopularContainer>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </S.MostPopularContainer>
    </S.Container>
  );
};

export default Home;
