import { Episode, Show } from './../src/interfaces';
export const mockShows: Show[] = [
  {
    id: 1,
    name: 'Stranger Things',
    image: { medium: 'https://example.com/stranger-things.jpg' },
    rating: { average: 8.7 },
    genres: ['Drama', 'Fantasy', 'Horror'],
    premiered: '2016-07-15',
  },
  {
    id: 2,
    name: 'Breaking Bad',
    image: { medium: 'https://example.com/breaking-bad.jpg' },
    rating: { average: 9.5 },
    genres: ['Crime', 'Drama', 'Thriller'],
    premiered: '2008-01-20',
  },
];

export const mockEpisodes: Episode[] = [
  {
    id: 1,
    name: 'Episode 1',
    image: {
      medium: 'https://example.com/image1.jpg',
    },
    airstamp: '2024-06-01T20:00:00Z',
    summary: '<p>This is a summary of Episode 1.</p>',
    number: 1,
    season: 1,
  },
  {
    id: 2,
    name: 'Episode 2',
    image: {
      medium: 'https://example.com/image2.jpg',
    },
    airstamp: '2024-06-08T20:00:00Z',
    summary: '<p>This is a summary of Episode 2.</p>',
    number: 2,
    season: 1,
  },
];

export const mockSingleEpisode: Episode = {
  id: 1,
  name: 'Test Episode',
  number: 1,
  airstamp: '2024-06-23T12:00:00Z',
  image: {
    medium: 'http://example.com/image.jpg',
  },
  summary: '<p>This is a summary</p>',
  season: 1,
};

export const mockSingleSeason = {
  id: 1,
  number: 1,
  episodeOrder: 10,
  premiereDate: '2024-06-01',
  image: {
    medium: 'https://example.com/season1.jpg',
  },
};

export const mockSingleShow: Show = {
  id: 1,
  name: 'Stranger Things',
  image: { medium: 'https://example.com/stranger-things.jpg' },
  rating: { average: 8.7 },
  genres: ['Drama', 'Fantasy', 'Horror'],
  premiered: '2016-07-15',
};
