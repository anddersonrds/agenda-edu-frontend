import styled, { keyframes } from 'styled-components';
import theme from '../../../shared/styles/theme';

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

export const MostPopularContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1140px;
  padding: 11rem 0 ${theme.spacings.small} 0;
  overflow: auto;

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
  }
`;
