/* eslint-disable camelcase */
import React, { useState, createContext, useCallback } from 'react';
import { MoviesService } from '../services/moviesService';

import { getSmallImage, getBigImage } from '../utils';

type MoviesListProps = Array<MovieProps>;

type CastProps = Array<{
  id: number;
  cast_id: number;
  name: string;
  character: string;
  profile_path?: string;
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
  networks: SocialProps;
};

type MoviesContextData = {
  movies: MoviesListProps;
  movieDetail: MovieProps;
  searched: MoviesListProps;
  page: number;
  finalPage: number;
  handlePopularMovies(page: number): void;
  handleGetMovieDetail(id: string): void;
  handleSearchMovies(query: string): void;
  setPage(page: number): void;
  setFinalPage(page: number): void;
};

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData,
);

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MoviesListProps>([] as MoviesListProps);
  const [movieDetail, setMovieDetail] = useState<MovieProps>({} as MovieProps);
  const [page, setPage] = useState<number>(1);
  const [finalPage, setFinalPage] = useState<number>(1);

  const [searched, setSearchedMovies] = useState<MoviesListProps>(
    [] as MoviesListProps,
  );

  const handlePopularMovies = useCallback(async (pageNumber: number) => {
    const moviesService = new MoviesService();
    const { data } = await moviesService.getPopularMovies(pageNumber);
    setFinalPage(data.total_results);
    setMovies(prevMovies => [
      ...prevMovies,
      ...data.results.map((movie: MovieProps) => ({
        ...movie,
        image: getSmallImage(movie.poster_path),
      })),
    ]);
  }, []);

  const handleGetMovieDetail = useCallback(async (id: string) => {
    const moviesService = new MoviesService();
    const { data: detailData } = await moviesService.getMovieDetail(id);
    const { data: castData } = await moviesService.getCastByMovie(id);
    const { data: socialData } = await moviesService.getSocialNetworks(id);

    setMovieDetail({
      ...detailData,
      cast: castData.cast,
      networks: socialData,
      image: getBigImage(detailData.poster_path),
    });
  }, []);

  const handleSearchMovies = useCallback(async (query: string) => {
    const moviesService = new MoviesService();
    const { data, status } = await moviesService.searchMovies(query);
    console.log(data, status);
    // if (status === 200) {
    //   setSearchedMovies(data.results);
    // }
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieDetail,
        searched,
        page,
        finalPage,
        handlePopularMovies,
        handleGetMovieDetail,
        handleSearchMovies,
        setPage,
        setFinalPage,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
