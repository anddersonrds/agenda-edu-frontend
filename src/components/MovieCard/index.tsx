/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

type CardMovieProps = {
  id: number;
  title: string;
  image: string;
  rating: number;
  overview: string;
};

const MovieCard = ({ id, title, image, rating, overview }: CardMovieProps) => {
  return (
    <Link to={`/movies/${id}`}>
      <S.Container>
        <img src={image} alt={title} />
        <S.Info>
          <strong>{title}</strong>
          <S.Tag>{rating}</S.Tag>
        </S.Info>
        {/* <S.Overview>
          <h3>Overview</h3>
          <p>{overview}</p>
        </S.Overview> */}
      </S.Container>
    </Link>
  );
};

export default MovieCard;
