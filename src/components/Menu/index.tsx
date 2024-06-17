import React from 'react';
import { useTheme } from 'styled-components';

import { MenuItem } from '@components/common';
import { BookmarkIcon, BurgerMenuIcon, HomeIcon } from '@components/Icons';
import { ROUTES } from '@constants/routes';
import { useToggleMenu } from '@hooks/index';

import { BurgerMenuButton, Navigation } from './styled';

interface MenuProps {
  isHomePage: boolean;
}

export function Menu({ isHomePage }: MenuProps) {
  const theme = useTheme();
  const { isMenuOpen, isMobile, toggleMenu } = useToggleMenu();

  function handleToggleMenu() {
    toggleMenu((prevState) => !prevState);
  }

  return (
    <>
      {isMobile && (
        <BurgerMenuButton onClick={handleToggleMenu}>
          <BurgerMenuIcon />
        </BurgerMenuButton>
      )}
      {(!isMobile || isMenuOpen) && (
        <Navigation>
          {!isHomePage && (
            <MenuItem href={ROUTES.HOME} icon={<HomeIcon />} label="Home" handleMenuItemClick={handleToggleMenu} />
          )}
          <MenuItem
            href={ROUTES.FAVORITES}
            icon={<BookmarkIcon color={`${theme.textHighlight}`} />}
            label="Your favorites"
            handleMenuItemClick={handleToggleMenu}
          />
        </Navigation>
      )}
    </>
  );
}
