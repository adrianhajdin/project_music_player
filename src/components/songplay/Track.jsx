import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex items-center justify-start w-1/4 md:w-1/2 lg:w-1/3">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-32 md:w-60 lg:w-52 xl:w-fit">
      <p className="truncate">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
