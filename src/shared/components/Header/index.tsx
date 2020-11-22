import React, { useContext, InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import { MoviesContext } from '../../context/MoviesContext';

import * as S from './styles';

type HeaderProps = {
  logo?: boolean;
  back?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Header = ({ logo, back }: HeaderProps) => {
  const { query, setQuery } = useContext(MoviesContext);

  return (
    <S.Container>
      <S.HeaderContent>
        {back && (
          <Link to="/">
            <S.GoBack size={30} />
          </Link>
        )}

        {logo && (
          <Link to="/">
            <S.LogoTMDB
              src="https://bit.ly/3lXlcpn"
              alt="The Movie Database (TMDB)"
            />
          </Link>
        )}

        <S.Form>
          <DebounceInput
            type="text"
            placeholder="Pesquise filmes por nome"
            value={query}
            debounceTimeout={500}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </S.HeaderContent>
    </S.Container>
  );
};

export default Header;
