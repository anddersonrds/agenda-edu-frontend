import styled, { css, keyframes } from 'styled-components';
import theme from '../../../shared/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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
  align-items: flex-start;
  max-width: 1140px;
  width: 100%;
  padding: 11rem 0 ${theme.spacings.medium} 0;

  animation: ${appearFromBottom} 1.5s;

  @media (max-width: 1140px) {
    max-width: 912px;
  }

  @media (max-width: 912px) {
    max-width: 684px;
  }

  @media (max-width: 684px) {
    max-width: 456px;
  }

  @media (max-width: 456px) {
    max-width: 228px;
    padding: 8rem 0;
  }
`;

export const InfoMovie = styled.div`
  display: flex;
  padding: ${theme.spacings.medium} 0;

  @media (max-width: 456px) {
    flex-direction: column;
  }

  @media (max-width: 456px) {
    max-width: 228px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 912px) {
    max-width: 344px;
  }

  @media (max-width: 684px) {
    max-width: 250px;
  }
`;

type WrapperProps = {
  horizontal?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacings.small};

  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
      align-items: center;

      strong {
        margin-left: ${theme.spacings.xxsmall};
        margin-bottom: 0;
      }
    `}}
`;

export const Title = styled.strong`
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.xlarge};
  font-weight: ${theme.font.bold};
  margin-bottom: ${theme.spacings.xxsmall};
  color: ${theme.colors.gray};

  @media (max-width: 684px) {
    font-size: ${theme.sizes.large};
  }
`;

export const Content = styled.p`
  font-size: ${theme.sizes.large};

  @media (max-width: 684px) {
    font-size: ${theme.sizes.medium};
  }
`;

export const Phrase = styled.span`
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.large};
  font-weight: ${theme.font.bold};
  padding-top: ${theme.spacings.xxsmall};
  color: ${theme.colors.secondary};

  @media (max-width: 684px) {
    font-size: ${theme.sizes.medium};
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
  flex-wrap: wrap;

  > div {
    width: fit-content;
    font-size: ${theme.sizes.large};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
    background: linear-gradient(${theme.colors.gradient});
    cursor: pointer;
    transition: background-color 0.5s;
    margin-top: 5px;
    margin-right: 5px;

    &:hover {
      background: linear-gradient(82deg, #39e6d7 0%, #02b4e4 100%);
    }
  }
`;
