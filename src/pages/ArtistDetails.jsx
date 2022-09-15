import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, RelatedSongs } from '../components';

import { useFetchArtistDetailsQuery, useGetSongDetailsQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
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

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, songData, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
        songData={songData}
      />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
