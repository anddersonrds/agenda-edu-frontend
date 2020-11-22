/* eslint-disable camelcase */
import React from 'react';
import { getSmallImage } from '../../utils';

import * as S from './styles';

type MovieCastsProps = {
  moviecasts: Array<MovieCastProps>;
};

type MovieCastProps = {
  id: number;
  name: string;
  profile_path: string;
};

const MovieCasts = ({ moviecasts }: MovieCastsProps) => {
  return (
    <S.Wrapper>
      {moviecasts &&
        moviecasts.map((cast: MovieCastProps) => (
          <div key={cast.id}>
            <img src={getSmallImage(cast.profile_path)} alt={cast.name} />
            <span>{cast.name}</span>
          </div>
        ))}
    </S.Wrapper>
  );
};

export default MovieCasts;
