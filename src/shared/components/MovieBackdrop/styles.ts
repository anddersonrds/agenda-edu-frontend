import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacings.large};

  img {
    width: 35rem;
    border-radius: 10px;
  }
`;
