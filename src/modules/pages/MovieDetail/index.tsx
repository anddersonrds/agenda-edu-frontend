import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../../../shared/context/MoviesContext';

import { fixRating, getLocaleDate } from '../../../shared/utils';

import Header from '../../../shared/components/Header';
import MovieBackdrop from '../../../shared/components/MovieBackdrop';
import MovieTitle from '../../../shared/components/MovieTitle';
import MovieCasts from '../../../shared/components/MovieCasts';

import * as S from './styles';

type ParamsProps = {
  id: string;
};

const MovieDetail = () => {
  const { id } = useParams<ParamsProps>();
  const { movieDetail, handleGetMovie } = useContext(MoviesContext);

  useEffect(() => {
    handleGetMovie(id);
  }, [id, handleGetMovie]);

  return (
    <>
      <Header back />
      <S.Container>
        {movieDetail && movieDetail.image && (
          <S.DetailContainer>
            <S.InfoMovie>
              <MovieBackdrop src={movieDetail.image} alt={movieDetail.title} />

              <S.InfoContainer>
                <MovieTitle
                  title={movieDetail.title}
                  date={movieDetail.release_date}
                />

                <S.Wrapper horizontal>
                  <S.Tags>
                    {movieDetail.vote_average &&
                      fixRating(movieDetail.vote_average)}
                  </S.Tags>
                  <S.Title>Nota dos usuários</S.Title>
                </S.Wrapper>

                <S.Wrapper>
                  <S.Title>Sinópse</S.Title>
                  <S.Content>
                    {movieDetail.overview
                      ? movieDetail.overview
                      : 'Sinto muito, nenhuma sinópse foi encontrada.'}
                  </S.Content>
                  {movieDetail.tagline && (
                    <S.Phrase>{`“${movieDetail.tagline}”`}</S.Phrase>
                  )}
                </S.Wrapper>

                <S.Wrapper>
                  <S.Title>Data de lançamento</S.Title>
                  <S.Content>
                    {movieDetail.release_date &&
                      getLocaleDate(movieDetail.release_date)}
                  </S.Content>
                </S.Wrapper>

                <S.Wrapper>
                  <S.Title>Categorias</S.Title>
                  <S.Categories>
                    {movieDetail.genres &&
                      movieDetail.genres.map(genre => (
                        <S.Tags key={genre.id}>{genre.name}</S.Tags>
                      ))}
                  </S.Categories>
                </S.Wrapper>
              </S.InfoContainer>
            </S.InfoMovie>

            <S.Wrapper>
              <S.Title>Elenco Principal</S.Title>
              <MovieCasts moviecasts={movieDetail.cast} />
            </S.Wrapper>
          </S.DetailContainer>
        )}
      </S.Container>
    </>
  );
};

export default MovieDetail;
