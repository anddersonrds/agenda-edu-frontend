import clientApi from './clientApi';

export class MoviesService {
  API: any;

  constructor() {
    this.API = clientApi();
  }

  getPopularMovies = async (page: number) => {
    try {
      const { data, status } = await this.API.get(
        `movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&page=${page}`,
      );
      return { data, status };
    } catch (error) {
      return { error };
    }
  };

  getMovieDetail = async (id: string) => {
    try {
      const { data, status } = await this.API.get(
        `movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`,
      );
      return { data, status };
    } catch (error) {
      return { error };
    }
  };

  getCastByMovie = async (id: string) => {
    try {
      const { data, status } = await this.API.get(
        `movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`,
      );
      return { data, status };
    } catch (error) {
      return { error };
    }
  };

  getSocialNetworks = async (id: string) => {
    try {
      const { data, status } = await this.API.get(
        `movie/${id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      );
      return { data, status };
    } catch (error) {
      return { error };
    }
  };

  // searchMovies = async (query: string) => {
  //   try {
  //     const { data, status } = await this.API.get(
  //       `search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&query=${query}`,
  //     );
  //     return { data, status };
  //   } catch (error) {
  //     return { error };
  //   }
  // };

  searchMovies = async (query?: string, page?: number) => {
    try {
      const { data, status } = await this.API.get(
        `search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&query=${query}&page=${page}`,
      );
      return { data, status };
    } catch (error) {
      return { error };
    }
  };
}
