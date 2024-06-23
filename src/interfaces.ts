export interface Show {
  id: number;
  name: string;
  image: { original: string };
  rating: { average: number };
  genres: string[];
  premiered: string;
}

export interface Season {
  id: number;
  number: number;
  episodeOrder: number;
  premiereDate: string;
  image: { original: string };
}

export interface Episode {
  id: number;
  name: string;
  image: { original: string };
  airstamp: string;
  summary: string;
  number: number;
  season: number;
}
