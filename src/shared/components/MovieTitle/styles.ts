import styled from 'styled-components';
import { FiFilm } from 'react-icons/fi';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.small};
`;

export const Title = styled.h2`
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.xxlarge};
`;

export const YearRelease = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font.quicksand};
  font-weight: ${theme.font.bold};
  font-size: ${theme.sizes.xxlarge};
`;

export const IconMovie = styled(FiFilm)`
  color: ${theme.colors.secondary};
  margin-right: ${theme.spacings.xxsmall};
`;
