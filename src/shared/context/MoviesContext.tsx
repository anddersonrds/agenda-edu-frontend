/* eslint-disable camelcase */
import React, { useState, createContext, useCallback } from 'react';

import { MoviesService } from '../services/moviesService';
import { useToast } from './ToastContext';

import { getMediumImage, getLargeImage } from '../utils';

type MoviesListProps = Array<MovieProps>;

type CastProps = Array<{
  id: number;
  cast_id: number;
  name: string;
  character: string;
  profile_path: string;
}>;

type SocialProps = {
  id: number;
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
};

type MovieProps = {
  id: number;
  image: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  overview: string;
  poster_path: string;
  release_date: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
  cast: CastProps;
  networks?: SocialProps;
};

type MoviesContextData = {
  movies: MoviesListProps;
  movieDetail: MovieProps;
  finalPage: number;
  query: string;
  handleGetMovie(id: string): void;
  handleShowMovies(page: number): void;
  handleUpdateMovies(page: number): void;
  handleFindMovies(query: string, page: number): void;
  handleUpdateFindMovies(query: string, page: number): void;
  setQuery(query: string): void;
  setFinalPage(page: number): void;
};

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData,
);

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MoviesListProps>([] as MoviesListProps);
  const [movieDetail, setMovieDetail] = useState<MovieProps>({} as MovieProps);
  const [query, setQuery] = useState<string>('');
  const [finalPage, setFinalPage] = useState<number>(1);

  const { addToast } = useToast();

  const handleGetMovie = useCallback(async (id: string) => {
    const moviesService = new MoviesService();
    try {
      const { data: detailData } = await moviesService.getMovieDetail(id);
      const { data: castData } = await moviesService.getCastByMovie(id);
      const { data: socialData } = await moviesService.getSocialNetworks(id);
      setMovieDetail({
        ...detailData,
        cast: castData.cast,
        networks: socialData,
        image: getLargeImage(detailData.poster_path),
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro em detalhes do filme',
        description: 'Ocorreu um erro, tente novamente em alguns segundos.',
      });
    }
  }, []);

  const handleShowMovies = useCallback(
    async (pageNumber: number) => {
      const moviesService = new MoviesService();
      try {
        const { data } = await moviesService.getPopularMovies(pageNumber);
        setMovies(
          data.results.map((movie: MovieProps) => ({
            ...movie,
            image: getLargeImage(movie.poster_path),
          })),
        );
        setFinalPage(data.total_results);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na listagem de filmes',
          description: 'Ocorreu um erro, tente novamente em alguns segundos.',
        });
      }
    },
    [addToast],
  );

  const handleUpdateMovies = useCallback(
    async (pageNumber: number) => {
      const moviesService = new MoviesService();
      try {
        const { data } = await moviesService.getPopularMovies(pageNumber);
        setMovies(prevMovies => [
          ...prevMovies,
          ...data.results.map((movie: MovieProps) => ({
            ...movie,
            image: getMediumImage(movie.poster_path),
          })),
        ]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao carregar nova página',
          description: 'Ocorreu um erro, tente novamente em alguns segundos.',
        });
      }
    },
    [addToast],
  );

  const handleFindMovies = useCallback(
    async (searched: string, pageNumber: number) => {
      const moviesService = new MoviesService();
      try {
        const { data } = await moviesService.searchMovies(searched, pageNumber);
        setMovies(
          data.results.map((movie: MovieProps) => ({
            ...movie,
            image: getMediumImage(movie.poster_path),
          })),
        );
        setFinalPage(data.total_results);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na pesquisa',
          description: 'Ocorreu um erro, tente novamente em alguns segundos.',
        });
      }
    },
    [addToast],
  );

  const handleUpdateFindMovies = useCallback(
    async (searched: string, pageNumber: number) => {
      const moviesService = new MoviesService();
      try {
        const { data } = await moviesService.searchMovies(searched, pageNumber);
        setMovies(prevMovies => [
          ...prevMovies,
          ...data.results.map((movie: MovieProps) => ({
            ...movie,
            image: getMediumImage(movie.poster_path),
          })),
        ]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na atualização da pesquisa',
          description: 'Ocorreu um erro, tente novamente em alguns segundos.',
        });
      }
    },
    [addToast],
  );

  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieDetail,
        finalPage,
        query,
        handleGetMovie,
        handleShowMovies,
        handleUpdateMovies,
        handleFindMovies,
        handleUpdateFindMovies,
        setQuery,
        setFinalPage,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
