import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';

import { getJustYear, fixRating, getLocaleDate } from '../../utils';

import Header from '../../components/Header';

import * as S from './styles';

type ParamsProps = {
  id: string;
};

const MovieDetail = () => {
  const { id } = useParams<ParamsProps>();
  const { movieDetail, handleGetMovieDetail } = useContext(MoviesContext);

  useEffect(() => {
    handleGetMovieDetail(id);
  }, [id, handleGetMovieDetail]);

  return (
    <S.Container>
      <Header back />

      {movieDetail && (
        <>
          <S.DetailContainer>
            <S.InfoMovie>
              <S.BackDrop>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                  alt={movieDetail.title}
                />
              </S.BackDrop>

              <S.InfoContainer>
                <S.WrapperTitle>
                  <S.Title>{movieDetail.title}</S.Title>

                  <S.Year>
                    <S.IconMovie size={30} />
                    {movieDetail.release_date &&
                      getJustYear(movieDetail.release_date)}
                  </S.Year>
                </S.WrapperTitle>

                <S.WrapperRatings>
                  <S.Tags>
                    {movieDetail.vote_average &&
                      fixRating(movieDetail.vote_average)}
                  </S.Tags>
                  <span>Nota dos usuários</span>
                </S.WrapperRatings>

                <S.WrapperContent>
                  <strong>Sinópse</strong>
                  <p>{movieDetail.overview}</p>
                  {movieDetail.tagline && (
                    <span>{`“${movieDetail.tagline}”`}</span>
                  )}
                </S.WrapperContent>

                <S.WrapperContent>
                  <strong>Data de lançamento</strong>
                  <p>
                    {movieDetail.release_date &&
                      getLocaleDate(movieDetail.release_date)}
                  </p>
                </S.WrapperContent>

                <S.WrapperContent>
                  <strong>Categorias</strong>
                  <S.Categories>
                    {movieDetail.genres &&
                      movieDetail.genres.map(genre => (
                        <S.Tags key={genre.id}>{genre.name}</S.Tags>
                      ))}
                  </S.Categories>
                </S.WrapperContent>
              </S.InfoContainer>
            </S.InfoMovie>
            <S.WrapperStaff>
              {movieDetail.cast &&
                movieDetail.cast.map(staff => (
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w154${staff.profile_path}`}
                      alt={staff.name}
                    />
                    <span>{staff.name}</span>
                  </div>
                ))}
            </S.WrapperStaff>
          </S.DetailContainer>
        </>
      )}
    </S.Container>
  );
};

export default MovieDetail;
