import styled from 'styled-components';
import {
  breakpoints,
  grayDarker,
  grayLightest,
  darkPurple,
  defaultFontFamily,
} from '../../css-vars';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

  @media (min-width: ${breakpoints.medium}) {
    padding: 24px;
  }
`;

export const StyledSearchBarWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  flex: 1;
  font-size: 14px;
  padding: 8px;
  border: 1px solid ${grayLightest};
  border-radius: 4px;
  color: ${grayDarker};
  font-family: ${defaultFontFamily};
  &:focus {
    outline: none;
    border-color: ${darkPurple};
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`;

export const StyledSearchButton = styled.button`
  background-color: ${darkPurple};
  color: ${grayLightest};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  margin-left: 0;

  &:hover {
    background-color: ${grayDarker};
  }

  @media (min-width: ${breakpoints.medium}) {
    padding: 12px 24px;
    font-size: 16px;
    margin-left: 8px;
  }
`;
