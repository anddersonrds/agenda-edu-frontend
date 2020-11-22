import React from 'react';

import * as S from './styles';

type BackdropProps = {
  src: string;
  alt: string;
};

const MovieBackdrop = ({ src, alt }: BackdropProps) => {
  return (
    <S.Wrapper>
      <img src={src} alt={alt} />
    </S.Wrapper>
  );
};

export default MovieBackdrop;
