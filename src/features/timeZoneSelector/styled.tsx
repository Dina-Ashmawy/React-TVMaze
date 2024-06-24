import styled from 'styled-components';
import { darkPurple, defaultFontFamily } from '../../css-vars';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkPurple};
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 18px;
  font-family: ${defaultFontFamily};
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 16px;
  width: 200px;
`;
