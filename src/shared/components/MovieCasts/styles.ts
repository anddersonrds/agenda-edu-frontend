import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const appearArrowRight = keyframes`
  from {
    right: 30px;
  }
  to {
    right: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex: 1;
  max-width: 1140px;
  overflow-x: auto;
  padding: ${theme.spacings.small} 0;
  -webkit-overflow-scrolling: touch;
  -ms--ms-overflow-style: -ms-autohiding-scrollbar;

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
  }

  &::after {
    content: '→';
    position: absolute;
    top: 0;
    right: 30px;
    font-family: ${theme.font.quicksand};
    font-size: ${theme.sizes.xlarge};
    color: ${theme.colors.secondary};

    animation: ${appearArrowRight} 0.5s ease-in 0s infinite alternate;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 0.4rem;
    transition: transform ${theme.transition.default};

    img {
      width: 155px;
      border-radius: 10px;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);

      @media (max-width: 912px) {
        width: 120px;
      }

      @media (max-width: 684px) {
        width: 90px;
      }

      @media (max-width: 456px) {
        max-width: 228px;
      }
    }

    span {
      font-family: ${theme.font.quicksand};
      font-size: ${theme.sizes.medium};
      font-weight: ${theme.font.bold};
      margin-top: ${theme.spacings.xxsmall};

      @media (max-width: 456px) {
        font-size: ${theme.sizes.xsmall};
      }
    }

    &:hover {
      z-index: ${theme.layers.base};
      transform: translateY(-1.4rem);
      cursor: pointer;
    }
  }
`;
