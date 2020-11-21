import React from 'react';

import { fixRating } from '../../utils';

import * as S from './styles';

type CardMovieProps = {
  title: string;
  image: string;
  rating: number;
};

const MovieCard = ({ title, image, rating }: CardMovieProps) => {
  return (
    <S.Container>
      <img src={image} alt={title} />
      <S.Info>
        <strong>{title}</strong>
        <S.Tag>{fixRating(rating)}</S.Tag>
      </S.Info>
    </S.Container>
  );
};

export default MovieCard;
