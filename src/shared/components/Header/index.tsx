import React, { useEffect, useContext, InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { MoviesContext } from '../../context/MoviesContext';
import { useDebounce } from '../../hooks/useDebounce';

import * as S from './styles';

type HeaderProps = {
  logo?: boolean;
  back?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Header = ({ logo, back }: HeaderProps) => {
  const [query, search, setSearch] = useDebounce<string>('', 500);
  const { handleFindMovies } = useContext(MoviesContext);

  useEffect(() => {
    if (search !== '') {
      handleFindMovies(query);
    }
  }, [query, search, handleFindMovies]);

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

        <S.Form
          onSubmit={() => {
            console.log('WOW');
          }}
        >
          <input
            type="text"
            placeholder="Pesquise filmes por nome"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </S.HeaderContent>
    </S.Container>
  );
};

export default Header;
