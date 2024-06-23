import React from 'react';
import { Episode } from '../../interfaces';
import { formatDateToTimeZone } from '../../utils/dateUtils';
import {
  StyledImage,
  StyledInfo,
  StyledName,
  StyledAirDate,
  StyledReadMoreButton,
  StyledSummary,
  StyledCard,
} from './styled';

interface EpisodeCardProps {
  episode: Episode;
  expanded: boolean;
  toggleExpanded: () => void;
  timeZone: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  expanded,
  toggleExpanded,
  timeZone,
}) => {
  const formattedDate = formatDateToTimeZone(episode.airstamp, timeZone);

  return (
    <StyledCard>
      <StyledImage
        src={episode.image?.original}
        alt={`Episode ${episode.number}`}
      />
      <StyledInfo>
        <StyledName>{episode.name}</StyledName>
        <StyledAirDate>Air Date: {formattedDate}</StyledAirDate>
        <StyledSummary
          expanded={expanded}
          dangerouslySetInnerHTML={{ __html: episode.summary || '' }}
        />
        <StyledReadMoreButton onClick={toggleExpanded}>
          {expanded ? 'Read Less' : 'Read More'}
        </StyledReadMoreButton>
      </StyledInfo>
    </StyledCard>
  );
};

export default EpisodeCard;
