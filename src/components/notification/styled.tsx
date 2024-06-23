import styled from 'styled-components';
import { defaultFontFamily } from '../../css-vars';

export const StyledContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1;
  font-family: ${defaultFontFamily};
  font-size: 12px;
`;

export const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
