import React, { useState } from 'react';
import {
  StyledLink,
  StyledCardContainer,
  StyledImage,
  StyledTitle,
  StyledInfo,
  StyledButton,
} from './styled';
import useFavorites from '../../hooks/useFavorites';
import { Show } from '../../interfaces';
import Notification from '../../components/notification'; // Import Notification component

interface ShowCardProps {
  show: Show;
}

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { id, name, image, genres, rating, premiered } = show;

  const [notification, setNotification] = useState<string | null>(null);

  const handleFavoriteToggle = () => {
    const isFavorite = favorites.includes(name);
    toggleFavorite(name);

    const message = isFavorite
      ? `${name} removed from favorites`
      : `${name} added to favorites`;

    setNotification(message);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <StyledCardContainer>
      <StyledLink to={`/shows/${id}/seasons`}>
        <StyledImage src={image?.medium} alt={name} />
        <StyledTitle>{name}</StyledTitle>
        <StyledInfo>Genres: {genres?.join(', ')}</StyledInfo>
        <StyledInfo>Year: {premiered}</StyledInfo>
        {rating?.average && <StyledInfo>Rating: {rating.average}</StyledInfo>}
      </StyledLink>
      <StyledButton onClick={handleFavoriteToggle}>
        {favorites.includes(name)
          ? 'Remove from Favorites'
          : 'Add to Favorites'}
      </StyledButton>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </StyledCardContainer>
  );
};

export default ShowCard;
