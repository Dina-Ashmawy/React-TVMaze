import React from 'react';
import { Season } from '../../interfaces';
import { SeasonItem, SeasonInfo, StyledLink } from './styled';

const SeasonCard: React.FC<{ season: Season; showId: string }> = ({
  season,
  showId,
}) => (
  <SeasonItem bgImage={season.image?.medium || ''}>
    <SeasonInfo>
      <h3>Season {season.number}</h3>
      <p>Episodes: {season.episodeOrder}</p>
      <p>Premiered: {season.premiereDate}</p>
      <StyledLink to={`/shows/${showId}/seasons/${season.number}/episodes`}>
        Episodes
      </StyledLink>
    </SeasonInfo>
  </SeasonItem>
);

export default SeasonCard;
