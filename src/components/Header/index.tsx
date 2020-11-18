import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

type HeaderProps = {
  logo?: boolean;
  back?: boolean;
};

const Header = ({ logo, back }: HeaderProps) => {
  return (
    <S.Container>
      <S.HeaderContent>
        {logo && (
          <S.LogoTMDB
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="The Movie Database (TMDB)"
          />
        )}

        {back && (
          <Link to="/">
            <S.GoBack size={30} />
          </Link>
        )}

        <S.Form>
          <input type="text" placeholder="Pesquise filmes por nome" />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </S.HeaderContent>
    </S.Container>
  );
};

export default Header;
