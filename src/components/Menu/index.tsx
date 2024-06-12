import { BookmarkIcon, BurgerMenuIcon, HomeIcon } from '@components/Icons';
import { MenuItem } from '@components/common';
import { ROUTES } from '@constants/routes';
import { useToggleMenu } from '@utils/hooks';
import React from 'react';

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
