import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';
import { shade } from 'polished';

import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: ${theme.spacings.xsmall} 0;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  background: ${theme.colors.white};
  z-index: ${theme.layers.base};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`;

export const LogoTMDB = styled.img`
  height: 3rem;
`;

export const GoBack = styled(FiChevronLeft)`
  cursor: pointer;
  color: ${theme.colors.secondary};
  transition: transform ${theme.transition.default};

  &:hover {
    transform: translateX(-1rem);
  }
`;

export const Form = styled.form`
  display: flex;
  max-width: 700px;
  width: 100%;

  input {
    flex: 1;
    height: 50px;
    font-size: ${theme.sizes.medium};
    padding: 0 ${theme.spacings.small};
    border: 2px solid ${theme.colors.light};
    border-radius: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
  }

  button {
    width: 150px;
    height: 50px;
    font-family: ${theme.font.quicksand};
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.bold};
    border: 0;
    border-radius: ${theme.spacings.xxsmall};
    margin-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};
    background: linear-gradient(${theme.colors.gradient});

    transition: background-color ${theme.transition.default};

    &:hover {
      background: linear-gradient(
        82deg,
        ${shade(0.1, '#39e6d7')} 0%,
        ${shade(0.1, '#19cdbf')} 100%
      );
    }
  }
`;
