import React from 'react';
import { render } from '@testing-library/react';
import SeasonCard from '.';
import '@testing-library/jest-dom';
import { mockSingleSeason } from '../../../mock/test.mock';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('SeasonCard Component', () => {
  const showId = '123';

  it('renders season details correctly', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <SeasonCard season={mockSingleSeason} showId={showId} />,
      </MemoryRouter>,
    );

    expect(getByText(`Season ${mockSingleSeason.number}`)).toBeInTheDocument();

    expect(
      getByText(`Episodes: ${mockSingleSeason.episodeOrder}`),
    ).toBeInTheDocument();
    expect(
      getByText(`Premiered: ${mockSingleSeason.premiereDate}`),
    ).toBeInTheDocument();
    const episodesLink = getByRole('link', { name: 'Episodes' });
    expect(episodesLink).toHaveAttribute(
      'href',
      `/shows/${showId}/seasons/${mockSingleSeason.number}/episodes`,
    );
  });
});
