import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // ** GET SONGS BY GENRE
    fetchSongsByGenre: builder.query({
      query: (genre) => `/v1/charts/genre-world?genre_code=${genre}`,
    }),
    // ** GET SONGS BY COUNTRY
    fetchSongsByCountry: builder.query({
      query: (countryCode) => `/v1/charts/country?country_code=${countryCode}`,
    }),
    // ** GET SONGS BY COUNTRY AND GENRE
    fetchSongsByCountryAndGenre: builder.query({
      query: (countryCode, genre) => `/v1/charts/genre-country?country_code=${countryCode}&genre_code=${genre}`,
    }),
    // ** GET SONGS BY CITY
    fetchSongsByCity: builder.query({
      query: (cityId) => `/v1/charts/city?city_id=${cityId}`,
    }),
    // ** GET SONGS BY SEARCH QUERY
    fetchSongsBySearch: builder.query({
      query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    // ** GET ARTIST DETAILS
    fetchArtistDetails: builder.query({
      query: (artistId) => `/v1/artists/details?artist_id=${artistId}`,
    }),
    getTopCharts: builder.query({
      query: () => '/v1/charts/world',
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useFetchSongsByCityQuery,
  useFetchSongsByCountryAndGenreQuery,
  useFetchSongsByGenreQuery,
  useFetchSongsByCountryQuery,
  useFetchSongsBySearchQuery,
  useFetchArtistDetailsQuery,
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
