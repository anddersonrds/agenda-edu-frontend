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
  movieDetail: MovieProps;
  movies: MoviesListProps;
  searched: MoviesListProps;
  handlePopularMovies(): void;
  handleGetMovieDetail(id: string): void;
  handleSearchMovies(query: string): void;
};

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData,
);

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MoviesListProps>([] as MoviesListProps);
  const [movieDetail, setMovieDetail] = useState<MovieProps>({} as MovieProps);
  const [searched, setSearchedMovies] = useState<MoviesListProps>(
    [] as MoviesListProps,
  );

  const handlePopularMovies = useCallback(async () => {
    const moviesService = new MoviesService();
    const { data } = await moviesService.getPopularMovies();
    setMovies(
      data.results.map((movie: MovieProps) => ({
        ...movie,
        image: getSmallImage(movie.poster_path),
      })),
    );
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
    if (status === 200) {
      setSearchedMovies(data.results);
    }
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieDetail,
        searched,
        handlePopularMovies,
        handleGetMovieDetail,
        handleSearchMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
