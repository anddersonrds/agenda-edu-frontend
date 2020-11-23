import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import { MoviesContext } from '../../context/MoviesContext';

import * as S from './styles';

type HeaderProps = {
  logo?: boolean;
  back?: boolean;
};

const Header = ({ logo, back }: HeaderProps) => {
  const { query, setQuery } = useContext(MoviesContext);
  const history = useHistory();

  return (
    <S.Container>
      <S.HeaderContent>
        {back && (
          <S.GoBackButton onClick={history.goBack}>
            <S.GoBack size={30} />
          </S.GoBackButton>
        )}

        {logo && (
          <S.LogoTMDB to="/">
            <img src="https://bit.ly/3lXlcpn" alt="The Movie Database (TMDB)" />
          </S.LogoTMDB>
        )}

        <S.Form>
          <DebounceInput
            type="text"
            placeholder="Pesquise filmes por nome"
            value={query}
            debounceTimeout={500}
            onChange={e => setQuery(e.target.value)}
          />
          <S.Button>
            <S.IconSearch size={30} />
          </S.Button>
        </S.Form>
      </S.HeaderContent>
    </S.Container>
  );
};

export default Header;
