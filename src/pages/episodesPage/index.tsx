import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchEpisodesQuery } from '../../services/tvMazeService';
import {
  StyledErrorMessage,
  StyledListContainer,
  StyledLoadingMessage,
  StyledPageTitle,
} from '../../gloablStyles';
import { Episode } from '../../interfaces';
import TimeZoneSelector from '../../components/timeZoneSelector';
import EpisodeCard from '../../components/episodeCard';

const EpisodesPage: React.FC = () => {
  const { showId, seasonNumber } = useParams<{
    showId: string;
    seasonNumber: string;
  }>();
  const {
    data: episodes = [],
    isLoading,
    error,
  } = useFetchEpisodesQuery(showId ?? '1');

  const [expandedEpisodeId, setExpandedEpisodeId] = useState<number | null>(
    null,
  );
  const [timeZone, setTimeZone] = useState<string>('UTC');

  const toggleExpanded = (episodeId: number) => {
    setExpandedEpisodeId((prev) => (prev === episodeId ? null : episodeId));
  };

  const handleTimeZoneChange = (value: string) => {
    setTimeZone(value); // Update timeZone state
  };

  const filteredEpisodes = episodes.filter(
    (episode) => episode.season === Number(seasonNumber),
  );

  if (isLoading) {
    return <StyledLoadingMessage>Loading...</StyledLoadingMessage>;
  }

  if (error) {
    return (
      <StyledErrorMessage>
        There is an error in fetching episodes
      </StyledErrorMessage>
    );
  }

  return (
    <>
      <StyledPageTitle>Episodes Information</StyledPageTitle>
      <TimeZoneSelector onChange={handleTimeZoneChange} />
      <StyledListContainer>
        {filteredEpisodes.map((episode: Episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            expanded={expandedEpisodeId === episode.id}
            toggleExpanded={() => toggleExpanded(episode.id)}
            timeZone={timeZone}
          />
        ))}
      </StyledListContainer>
    </>
  );
};

export default EpisodesPage;