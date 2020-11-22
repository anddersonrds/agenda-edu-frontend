import React from 'react';
import { getJustYear } from '../../utils';

import * as S from './styles';

type MovieTitleProps = {
  title: string;
  date: string;
};

const MovieTitle = ({ title, date }: MovieTitleProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.YearRelease>
        <S.IconMovie size={30} />
        {date && getJustYear(date)}
      </S.YearRelease>
    </S.Wrapper>
  );
};

export default MovieTitle;
