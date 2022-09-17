import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashtagIcon, HomeIcon, MenuIcon, PhotographIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HomeIcon },
  { name: 'Around You', to: '/around-you', icon: PhotographIcon },
  { name: 'Top Artists', to: '/top-artists', icon: UserGroupIcon },
  { name: 'Top Charts', to: '/top-charts', icon: HashtagIcon },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={`flex flex-row justify-start items-center my-5 text-sm font-medium ${item.current ? 'text-cyan-500' : 'text-gray-400 hover:text-cyan-400'}`}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <MenuIcon className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <XIcon className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
