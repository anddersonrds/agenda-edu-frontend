import styled from 'styled-components';
import { FiFilm } from 'react-icons/fi';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.small};

  @media (max-width: 1140px) {
    align-items: end;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.xxlarge};

  @media (max-width: 684px) {
    font-size: ${theme.sizes.xlarge};
  }
`;

export const YearRelease = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font.quicksand};
  font-weight: ${theme.font.bold};
  font-size: ${theme.sizes.xxlarge};

  @media (max-width: 912px) {
    display: none;
  }
`;

export const IconMovie = styled(FiFilm)`
  color: ${theme.colors.secondary};
  margin-right: ${theme.spacings.xxsmall};
`;
