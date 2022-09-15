import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useFetchArtistDetailsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { songid, id: artistId } = useParams();
  const { data, isFetching: isFetchinSongDetails } = useGetSongDetailsQuery({ songid });
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useFetchArtistDetailsQuery(artistId);

  const song = data;

  if (isFetchinSongDetails || isFetchingArtistDetails) {
    return (
      <div className="h-screen text-white">
        loading...
      </div>
    );
  }

  if (error) return 'Something went wrong...';

  return (
    <div className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-black h-48" />

        <div className="absolute inset-0 flex items-center">
          <img
            alt="profile"
            src={
               artistId
                 ? artistData?.artists[artistId].attributes?.artwork?.url
                   .replace('{w}', '500')
                   .replace('{h}', '500')
                 : data?.images.coverart
             }
            className="w-48 h-48 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold text-3xl text-white">
              {artistId ? artistData?.artists[artistId].attributes.name : data?.title}
            </p>
            {!artistId && (
            <Link to={`/artists/${song?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{data?.subtitle}</p>
            </Link>
            )}

            <p className="text-base text-gray-400 mt-2">
              {artistId
                ? artistData?.artists[artistId].attributes?.genreNames[0]
                : data?.genres?.primary}
            </p>
          </div>
        </div>

        <div className="w-full h-44" />
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      </div>
    </div>
  );
};

export default ArtistDetails;
