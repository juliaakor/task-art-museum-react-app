import React from 'react';

import { MenuItem } from '@components/common';
import { BookmarkIcon, BurgerMenuIcon, HomeIcon } from '@components/Icons';
import { ROUTES } from '@constants/routes';
import { useToggleMenu } from '@hooks/index';

import { BurgerMenuButton, Navigation } from './styled';

interface MenuProps {
  isHomePage: boolean;
}

export const Menu = ({ isHomePage }: MenuProps) => {
  const { isMenuOpen, isMobile, toggleMenu } = useToggleMenu();

  return (
    <>
      {isMobile && (
        <BurgerMenuButton onClick={() => toggleMenu(!isMenuOpen)}>
          <BurgerMenuIcon />
        </BurgerMenuButton>
      )}
      {(!isMobile || isMenuOpen) && (
        <Navigation>
          {!isHomePage && <MenuItem href={ROUTES.HOME} icon={<HomeIcon />} label="Home" />}
          <MenuItem
            href={ROUTES.FAVORITES}
            icon={<BookmarkIcon color="var(--c-palette-color-orange-2)" />}
            label="Your favorites"
          />
        </Navigation>
      )}
    </>
  );
};
