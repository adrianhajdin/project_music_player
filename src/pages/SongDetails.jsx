import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailsHeader } from '../components';

import { useFetchArtistDetailsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const { songid, id: artistId } = useParams();
  const { data: songData, isFetching: isFetchinSongDetails } = useGetSongDetailsQuery({ songid });
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useFetchArtistDetailsQuery(artistId);

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
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
        songData={songData}
      />

      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      </div>
    </div>
  );
};

export default SongDetails;
