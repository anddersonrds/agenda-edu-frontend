/* eslint-disable camelcase */
import React, { useState, createContext, useCallback } from 'react';
import { MoviesService } from '../services/moviesService';

type MoviesListProps = Array<{
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
}>;

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

type MovieDetailProps = {
  id: number;
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
  movieDetail: MovieDetailProps;
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
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>(
    {} as MovieDetailProps,
  );
  const [searched, setSearchedMovies] = useState<MoviesListProps>(
    [] as MoviesListProps,
  );

  const handlePopularMovies = useCallback(async () => {
    const moviesService = new MoviesService();
    const { data } = await moviesService.getPopularMovies();
    setMovies(data.results);
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
