import styled from 'styled-components';
import { darkPurple, grayLightest, breakpoints } from '../../css-vars';

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 30px;
  }
`;

export const StyledPageButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  margin: 0 2px;
  background-color: ${(props) => (props.active ? darkPurple : grayLightest)};
  color: ${(props) => (props.active ? grayLightest : darkPurple)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${darkPurple};
    color: ${grayLightest};
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: 8px 16px;
    margin: 0 4px;
  }
`;
