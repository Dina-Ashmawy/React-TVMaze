import styled from 'styled-components';
import { grayLightest, grayDarker } from '../../css-vars';

export const LastSearchesListWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1;
  background-color: ${grayLightest};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const LastSearchesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const LastSearchItem = styled.li`
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  color: ${grayDarker};
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${grayDarker};
    color: ${grayLightest};
  }
`;
