import React, {
  useState,
  useContext,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { Link } from 'react-router-dom';

import { MoviesContext } from '../../context/MoviesContext';

import * as S from './styles';

type HeaderProps = {
  icon?: React.ReactNode;
  error?: string;
  logo?: boolean;
  back?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Header = ({ icon, error, logo, back }: HeaderProps) => {
  const { handleSearchMovies } = useContext(MoviesContext);
  const [search, setSearch] = useState('');

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearch(e.target.value);
      const timer = setTimeout(() => {
        handleSearchMovies(search);
      }, 500);
      return () => clearTimeout(timer);
    },
    [search, handleSearchMovies],
  );

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
          <input
            type="text"
            placeholder="Pesquise filmes por nome"
            value={search}
            onChange={handleOnChange}
            onSubmit={handleOnChange}
          />
          <button type="submit">Pesquisar</button>
        </S.Form>
      </S.HeaderContent>
    </S.Container>
  );
};

export default Header;
