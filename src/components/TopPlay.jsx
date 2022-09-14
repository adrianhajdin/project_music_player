import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex flex-row items-center hover:bg-violet-600 p-2 rounded-md">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20" src={song?.images?.coverart} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-2">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 truncate mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    {isPlaying && activeSong.title === song.title ? (
      <FaPauseCircle size={25} onClick={handlePauseClick} />
    ) : (
      <FaPlayCircle
        size={25}
        onClick={handlePlayClick}
      />
    )}
  </div>
);

// const TopArtistCard = () => {};

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const topCharts = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = ({ song, i }) => {
    dispatch(setActiveSong({ song, topCharts, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="ml-6 flex-1 max-w-[500px] flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {topCharts?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
