import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import EpisodeCard from '.';
import { mockSingleEpisode } from '../../../mock/test.mock';
import '@testing-library/jest-dom';

describe('EpisodeCard Component', () => {
  it('renders episode name and air date correctly', () => {
    const { getByText } = render(
      <EpisodeCard
        episode={mockSingleEpisode}
        expanded={false}
        toggleExpanded={() => {}}
        timeZone="UTC"
      />,
    );

    expect(getByText('Test Episode')).toBeInTheDocument();
    expect(
      getByText('Air Date: Jun 23, 2024, 12:00:00 PM'),
    ).toBeInTheDocument();
  });

  it('renders "Read More" button when not expanded', () => {
    const { getByText } = render(
      <EpisodeCard
        episode={mockSingleEpisode}
        expanded={false}
        toggleExpanded={() => {}}
        timeZone="UTC"
      />,
    );
    expect(getByText('Read More')).toBeInTheDocument();
  });

  it('renders "Read Less" button when expanded', () => {
    const { getByText } = render(
      <EpisodeCard
        episode={mockSingleEpisode}
        expanded={true}
        toggleExpanded={() => {}}
        timeZone="UTC"
      />,
    );
    expect(getByText('Read Less')).toBeInTheDocument();
  });

  it('toggles expanded state when "Read More" button is clicked', () => {
    let expanded = false;
    const toggleExpanded = () => {
      expanded = !expanded;
    };

    const { getByText } = render(
      <EpisodeCard
        episode={mockSingleEpisode}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
        timeZone="UTC"
      />,
    );

    const readMoreButton = getByText('Read More');
    fireEvent.click(readMoreButton);
    expect(expanded).toBe(true);
  });

  it('displays episode summary when expanded', () => {
    const { getByText } = render(
      <EpisodeCard
        episode={mockSingleEpisode}
        expanded={true}
        toggleExpanded={() => {}}
        timeZone="UTC"
      />,
    );
    expect(getByText('This is a summary')).toBeInTheDocument();
  });
});
