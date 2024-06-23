import React from 'react';
import { useParams } from 'react-router-dom';
import SeasonCard from '../../components/seasonCard';
import { Season } from '../../interfaces';
import {
  StyledErrorMessage,
  StyledListContainer,
  StyledLoadingMessage,
  StyledPageTitle,
} from '../../gloablStyles';
import { useFetchSeasonsQuery } from '../../services/tvMazeService';

const SeasonsPage: React.FC = () => {
  const { showId } = useParams<{ showId: string }>();

  const {
    data: seasons,
    error,
    isLoading,
  } = useFetchSeasonsQuery(showId ?? '1');

  if (isLoading) {
    return <StyledLoadingMessage>Loading...</StyledLoadingMessage>;
  }

  if (error) {
    return (
      <StyledErrorMessage>
        There is error in fetching seasons
      </StyledErrorMessage>
    );
  }

  return (
    <>
      {seasons && seasons.length > 0 && (
        <>
          <StyledPageTitle>Seasons</StyledPageTitle>
          <StyledListContainer>
            {seasons.map((season: Season) => (
              <SeasonCard
                key={season.id}
                season={season}
                showId={showId ?? '1'}
              />
            ))}
          </StyledListContainer>
        </>
      )}
    </>
  );
};

export default SeasonsPage;
