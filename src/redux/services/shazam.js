import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/charts/list',
    }),
    getSongs: builder.query({
      query: ({ countryListId, cityListId, genreListId }) => {
        if (countryListId) return `/charts/track?locale=en-US&listId=${countryListId}&pageSize=20&startFrom=0`;
        if (cityListId) return `/charts/track?locale=en-US&listId=${cityListId}&pageSize=20&startFrom=0`;
        if (genreListId) return `/charts/track?locale=en-US&listId=${genreListId}&pageSize=20&startFrom=0`;
        return '/charts/track?locale=en-US&listId=ip-country-chart-DE&pageSize=20&startFrom=0';
      },
    }),
  }),
});

export const { useGetSongsQuery, useGetCountriesQuery } = shazamApi;
