import styled from 'styled-components';
import {
  breakpoints,
  defaultFontFamily,
  grayDarker,
  grayLightest,
} from '../../css-vars';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
width:auto;
  @media (min-width: ${breakpoints.medium}) {
    padding: 24px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${grayDarker};
  font-family: ${defaultFontFamily};
  text-align: center;
  margin-bottom: 12px;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  padding: 12px;
  margin-bottom: 10px;
  background-color: ${grayLightest};
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  color: ${grayDarker};
  font-family: ${defaultFontFamily};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.medium}) {
    font-size: 20px;
  }
`;
