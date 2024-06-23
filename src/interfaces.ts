export interface Show {
  id: number;
  name: string;
  image: { medium: string };
  rating: { average: number };
  genres: string[];
  premiered: string;
}

export interface Season {
  id: number;
  number: number;
  episodeOrder: number;
  premiereDate: string;
  image: { medium: string; };
}

export interface Episode {
  id: number;
  name: string;
  image: { medium: string };
  airstamp: string;
  summary: string;
  number: number;
  season: number;
}
