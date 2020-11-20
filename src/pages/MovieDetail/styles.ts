import styled, { keyframes } from 'styled-components';
import { FiFilm } from 'react-icons/fi';

import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1
    transform: translateY(0);
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1140px;
  width: 100%;
  padding: 11rem 0 ${theme.spacings.medium} 0;

  animation: ${appearFromBottom} 1.5s;
`;

export const InfoMovie = styled.div`
  display: flex;
  padding: ${theme.spacings.medium} 0;
`;

export const BackDrop = styled.div`
  display: flex;
  margin-right: ${theme.spacings.large};

  img {
    width: 35rem;
    border-radius: 10px;
  }
`;

export const InfoContainer = styled.div``;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-bottom: ${theme.spacings.small};
`;

export const IconMovie = styled(FiFilm)`
  color: ${theme.colors.secondary};
  margin-right: ${theme.spacings.xxsmall};
`;

export const Title = styled.h2`
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.xxlarge};
`;

export const Year = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.font.quicksand};
  font-weight: ${theme.font.bold};
  font-size: ${theme.sizes.xxlarge};
`;

export const WrapperRatings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacings.small};

  span {
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.gray};
    margin-left: ${theme.spacings.xxsmall};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacings.small};

  strong {
    font-family: ${theme.font.quicksand};
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
  }

  p {
    font-size: ${theme.sizes.large};
  }

  span {
    font-family: ${theme.font.quicksand};
    font-size: ${theme.sizes.large};
    padding-top: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondary};
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 40px;
  border-radius: 8px;
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.xlarge};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};
  padding: ${theme.spacings.minimal};
  background: linear-gradient(${theme.colors.gradient});
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: fit-content;
    font-size: ${theme.sizes.large};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
    background: linear-gradient(${theme.colors.gradient});
    transition: background-color 0.5s;
    cursor: pointer;

    &:hover {
      background: linear-gradient(82deg, #39e6d7 0%, #02b4e4 100%);
    }

    & + div {
      margin-left: 5px;
    }
  }
`;

export const WrapperStaff = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1140px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms--ms-overflow-style: -ms-autohiding-scrollbar;

  div {
    display: flex;
    flex-direction: column;
    margin: 0.4rem;

    img {
      border-radius: 10px;
    }
  }
`;
