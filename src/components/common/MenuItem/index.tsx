import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, NavLabel } from './styled';

interface MenuItemProps {
  href: string;
  icon: ReactElement;
  label: string;
  handleMenuItemClick?: () => void;
}

export const MenuItem = ({ handleMenuItemClick, href, icon, label, ...props }: MenuItemProps) => {
  return (
    <NavLink to={href} onClick={handleMenuItemClick} {...props}>
      <Container>
        {icon}
        <NavLabel>{label}</NavLabel>
      </Container>
    </NavLink>
  );
};
