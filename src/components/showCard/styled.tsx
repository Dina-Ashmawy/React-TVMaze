import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  defaultFontFamily,
  gray,
  grayDark,
  grayLight,
  grayLightest,
} from '../../css-vars';

export const StyledCardContainer = styled.div`
  position: relative;
  padding: 20px;
  background-color: ${grayLightest};
  border-radius: 4px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const StyledImage = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
`;

export const StyledContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`;

export const StyledTitle = styled.h2`
  color: ${grayDark};
  font-size: 20px;
  font-family: ${defaultFontFamily};
`;

export const StyledInfo = styled.p`
  color: ${gray};
  font-family: ${defaultFontFamily};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  border: 1px solid ${grayLight};
  color: ${grayDark};
  padding: 8px;
  cursor: pointer;
  margin-top: auto;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
