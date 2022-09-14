import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashtagIcon, HomeIcon, PhotographIcon, UserGroupIcon } from '@heroicons/react/outline';

const links = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Country Tracks', to: '/country-tracks', icon: PhotographIcon },
  { name: 'Artists', to: '/artists', icon: UserGroupIcon },
  { name: 'Top Charts', to: '/top-charts', icon: HashtagIcon },
];

const Sidebar = () => (
  <div className="h-screen flex flex-col min-w-[240px] py-10 px-4 bg-[#191624]">
    <div className="mt-4 flex flex-col">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={`flex flex-row justify-start items-center my-4 text-sm font-medium ${item.current ? 'text-cyan-500' : 'text-gray-400 hover:text-cyan-400'}`}
        >
          <item.icon
            className="w-6 h-6 mr-2"
          />

          {item.name}
        </NavLink>
      ))}
    </div>
  </div>
);

export default Sidebar;
