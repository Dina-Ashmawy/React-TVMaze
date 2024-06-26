import React from 'react';
import {
  StyledContainer,
  StyledContent,
  StyledAppName,
  StyledLink,
} from './styled';
const Header: React.FC = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledLink to="/">
          <StyledAppName>TVMaze Explorer</StyledAppName>
        </StyledLink>
      </StyledContent>
    </StyledContainer>
  );
};

export default Header;
