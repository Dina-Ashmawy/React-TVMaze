import styled from 'styled-components';
import { breakpoints, darkPurple, defaultFontFamily, grayDarker } from './css-vars';

const MessageBase = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 0;
  font-family: ${defaultFontFamily};
  padding: 100px;
`;

export const StyledErrorMessage = styled(MessageBase)`
  color: ${grayDarker};
`;

export const StyledLoadingMessage = styled(MessageBase)`
  color: ${darkPurple};
`;

export const StyledPageTitle = styled.h1`
  font-family: ${defaultFontFamily};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${darkPurple};
  text-align: center;


  @media (min-width: ${breakpoints.medium}) {
    font-size: 28px;
  }
`;

export const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: center;
  gap: 16px;
`;
