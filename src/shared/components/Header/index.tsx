import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import { MoviesContext } from '../../context/MoviesContext';

import * as S from './styles';

type HeaderProps = {
  logo?: boolean;
  back?: boolean;
  breakPoint?: boolean;
};

const Header = ({ logo, breakPoint, back }: HeaderProps) => {
  const { query, setQuery } = useContext(MoviesContext);
  const history = useHistory();

  useEffect(() => {
    if (query.length > 0) {
      history.push(`/movie/searched/${query}`);
    } else if (query === '' && breakPoint === false) {
      history.push('/');
    }
  }, [query, history, breakPoint]);

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
