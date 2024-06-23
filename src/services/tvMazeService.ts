import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants';
import { Episode, Season, Show } from '../interfaces';

const tvMazeApi = createApi({
  reducerPath: 'tvMazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchShows: builder.query<Show[], number>({
      query: (pageNumber) => `/shows?page=${pageNumber}`,
    }),
    fetchSearchShows: builder.query<Show[], string>({
      query: (searchTerm) => `/search/shows?q=${searchTerm}`,
      transformResponse: (response: { show: Show }[]) => {
        return response.map((item) => item.show);
      },
    }),
    fetchSeasons: builder.query<Season[], string>({
      query: (showId) => `/shows/${showId}/seasons`,
    }),
    fetchEpisodes: builder.query<Episode[], string>({
      query: (showId) => `/shows/${showId}/episodes`,
    }),
  }),
});

export const {
  useFetchShowsQuery,
  useFetchSearchShowsQuery,
  useFetchSeasonsQuery,
  useFetchEpisodesQuery,
} = tvMazeApi;
export default tvMazeApi;
