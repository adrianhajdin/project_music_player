import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';

import { useFetchSongsByGenreQuery } from '../redux/services/shazamCore';

const Home = () => {
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useFetchSongsByGenreQuery(genreListId || 'POP');
  const location = useLocation();

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const songs = location.pathname.startsWith('/search') ? data.map((song) => song.track) : data;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover top artists</h2>

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
    </div>
  );
};

export default Home;
