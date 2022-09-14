import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SongCard } from '../components';

import { useFetchSongsByGenreQuery } from '../redux/services/shazamCore';

const Home = () => {
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useFetchSongsByGenreQuery(genreListId || 'POP');
  const location = useLocation();

  if (isFetching) {
    return (
      <div className="h-screen text-white">
        loading...
      </div>
    );
  }

  if (error) return <p>Something went wrong...</p>;

  const songs = location.pathname.startsWith('/search') ? data.map((song) => song.track) : data;

  return (
    <div className="flex flex-wrap gap-8">
      {songs?.map((song, i) => (
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

export default Home;
