/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';

import { MoviesContext } from '../../../shared/context/MoviesContext';

import Header from '../../../shared/components/Header';
import MovieCard from '../../../shared/components/MovieCard';

import * as S from './styles';

const Search = () => {
  const { movies } = useContext(MoviesContext);

  // useEffect(() => {
  //   if (movies.length === 0) {
  //     handlePopularMovies();
  //   }
  // }, [handlePopularMovies, searched]);

  return (
    <S.Container>
      <Header logo />
      <S.MostPopularContainer>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rating={movie.vote_average}
          />
        ))}
      </S.MostPopularContainer>
    </S.Container>
  );
};

export default Search;
