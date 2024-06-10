import { MuseumLogoIcon } from '@components/Icons';
import { Menu } from '@components/Menu';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from './styled';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Header>
      <MuseumLogoIcon />
      <Menu isHomePage={isHomePage} />
    </Header>
  );
};
