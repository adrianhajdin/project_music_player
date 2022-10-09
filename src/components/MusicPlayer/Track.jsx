import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => {
  const currentImage = activeSong?.attributes
    ? activeSong?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')
    : activeSong?.images?.coverart;

  const currentTitle = activeSong?.attributes ? activeSong?.attributes?.name : activeSong?.title;
  const currentSubtitle = activeSong?.attributes ? activeSong?.attributes?.albumName : activeSong?.subtitle;

  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={currentImage} alt="cover art" className="rounded-full" />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {currentTitle || 'No active Song' }
        </p>
        <p className="truncate text-gray-300">
          {currentSubtitle || 'No active Song'}
        </p>
      </div>
    </div>
  );
};

export default Track;
