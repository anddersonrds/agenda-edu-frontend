import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0.4rem;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  transition: transform ${theme.transition.default};
  cursor: pointer;

  img {
    width: 220px;
    height: 330px;
    border-radius: 10px 10px 0 0;
  }

  &:hover {
    transform: translateY(-1.4rem);
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  background: ${theme.colors.light};
  border-radius: 0 0 10px 10px;

  strong {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25px;
  min-width: 25px;
  border-radius: 50%;
  font-family: ${theme.font.quicksand};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};
  padding: ${theme.spacings.minimum};
  background: linear-gradient(${theme.colors.gradient});
`;

export const Overview = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacings.xxsmall};
  background: ${theme.colors.white};
  overflow: auto;
  max-height: 50%;
  transform: translateY(100%);
  transition: transform ${theme.transition.default};

  &:hover {
    transform: translateY(0%);
  }
`;
