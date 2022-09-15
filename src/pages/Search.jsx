import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { SongCard } from '../components';
import { useFetchSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const location = useLocation();

  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useFetchSongsBySearchQuery(searchTerm);

  const songs = location.pathname.startsWith('/search') ? data?.tracks?.hits.map((song) => song.track) : data;

  if (isFetching) {
    return (
      <div className="h-screen text-white">
        loading...
      </div>
    );
  }

  if (error) return <p>Something went wrong...</p>;

  return (
    <div className="flex flex-wrap gap-8">
      {songs.map((song, i) => (
        <SongCard
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          i={i}
        />
      ))}
    </div>
  );
};

export default Search;
