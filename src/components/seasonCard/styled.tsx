import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darkPurple, defaultFontFamily, grayLightest } from '../../css-vars';

export const SeasonItem = styled.div<{ bgImage: string }>`
  font-family: ${defaultFontFamily};
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    url(${(props) => props.bgImage});
  height: 320px;
  width: 240px;
  font-size: 24px;
  color: ${grayLightest};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  box-shadow: 0 0 80px -16px black;
  border: 10px solid #ccc;
  text-decoration: none;
`;

export const SeasonInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 24px;
  }

  p {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${grayLightest};
  text-decoration: none;
  display: block;
  font-size: 14px;
  text-align: center;
  background: ${darkPurple};
  padding: 8px;
  border-radius: 4px;
`;
