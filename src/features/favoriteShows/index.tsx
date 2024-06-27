import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteShows } from '../../redux/showsSlice';
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledTitle,
} from './styled';

const FavoriteShows: React.FC = () => {
  const favorites = useSelector(selectFavoriteShows);

  return (
    <StyledContainer>
      {favorites?.length > 0 ? (
        <>
          <StyledTitle>My Favorite Shows</StyledTitle>
          <StyledList>
            {favorites.map((showName: string) => (
              <StyledListItem key={showName}>{showName}</StyledListItem>
            ))}
          </StyledList>
        </>
      ) : (
        <StyledTitle>There are no favorite shows.</StyledTitle>
      )}
    </StyledContainer>
  );
};

export default FavoriteShows;
