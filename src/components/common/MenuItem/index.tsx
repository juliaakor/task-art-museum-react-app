import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, NavLabel } from './styled';

interface MenuItemProps {
  href: string;
  icon: ReactElement;
  label: string;
}

export const MenuItem = ({ href, icon, label, ...props }: MenuItemProps) => {
  return (
    <Container>
      {icon}
      <NavLink to={href} {...props}>
        <NavLabel>{label}</NavLabel>
      </NavLink>
    </Container>
  );
};
