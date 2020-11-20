/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';

import { MoviesContext } from '../../context/MoviesContext';

import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

import * as S from './styles';

const Search = () => {
  const { searched } = useContext(MoviesContext);

  // useEffect(() => {
  //   if (movies.length === 0) {
  //     handlePopularMovies();
  //   }
  // }, [handlePopularMovies, searched]);

  return (
    <S.Container>
      <Header logo />
      <S.MostPopularContainer>
        {searched.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </S.MostPopularContainer>
    </S.Container>
  );
};

export default Search;
