import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  breakpoints,
  darkPurple,
  defaultFontFamily,
  grayDark,
  grayLighter,
} from '../../css-vars';

export const StyledContainer = styled.header`
  height: 64px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${grayLighter};

  @media (min-width: ${breakpoints.medium}) {
    height: 96px;
  }
`;

export const StyledContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const StyledAppName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${darkPurple};
  font-family: ${defaultFontFamily};

  &:hover {
    color: ${grayDark};
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.large}) {
    font-size: 32px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
