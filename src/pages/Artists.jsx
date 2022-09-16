import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetSongsQuery } from '../redux/services/shazam';

const Artists = () => {
  const { data, isFetching, error } = useGetSongsQuery({ genreListId: 'genre-global-chart-1' });

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover top artists</h2>

      <div className="flex flex-wrap gap-8">
        {data?.tracks.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default Artists;
