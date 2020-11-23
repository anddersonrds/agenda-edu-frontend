import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.large};

  @media (max-width: 456px) {
    margin-right: 0;
  }

  img {
    width: 35rem;
    border-radius: 10px;

    @media (max-width: 912px) {
      height: 45rem;
      width: auto;
    }

    @media (max-width: 684px) {
      height: 25rem;
    }

    @media (max-width: 456px) {
      height: 34rem;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  }
`;
