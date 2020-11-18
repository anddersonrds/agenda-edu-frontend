/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import clientAPI from '../../services/clientApi';

import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';

import * as S from './styles';

type MostPopularVideoProps = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
};

const Home = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState<
    MostPopularVideoProps[]
  >([]);

  useEffect(() => {
    clientAPI
      .get(
        'movie/popular?api_key=b7c4b4f9edeb30afd5713577ba564510&language=pt-BR',
      )
      .then(response => {
        const { results: popularVideos } = response.data;
        console.log(popularVideos);
        setMostPopularMovies(popularVideos);
      });
  }, []);

  return (
    <S.Container>
      <Header logo />
      <S.MostPopularContainer>
        {mostPopularMovies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            rating={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </S.MostPopularContainer>
    </S.Container>
  );
};

export default Home;
