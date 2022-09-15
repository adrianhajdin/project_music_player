import React from 'react';
import { useSelector } from 'react-redux';

import { SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) {
    return (
      <div className="h-screen text-white">
        loading...
      </div>
    );
  }

  console.log(data);

  if (error) return <p>Something went wrong...</p>;

  return (
    <div className="flex flex-wrap gap-8">
      {data.map((song, i) => (
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

export default TopCharts;
