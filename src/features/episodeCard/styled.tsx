import styled from 'styled-components';
import {
  darkPurple,
  defaultFontFamily,
  grayDark,
  grayLightest,
} from '../../css-vars';

export const StyledCard = styled.div`
  width: 300px;
  padding: 20px;
  background: ${grayLightest};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
`;

export const StyledInfo = styled.div`
  padding: 20px;
  font-family: ${defaultFontFamily};
`;

export const StyledName = styled.h2`
  color: ${darkPurple};
  margin: 0 0 10px;
`;

export const StyledAirDate = styled.p`
  font-size: 14px;
  color: ${grayDark};
  margin-bottom: 10px;
`;

export const StyledSummary = styled.div<{ expanded: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'unset' : '3')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const StyledReadMoreButton = styled.button`
  border: 2px solid ${darkPurple};
  background-color: ${darkPurple};
  color: white;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${grayLightest};
    color: ${darkPurple};
  }
`;
