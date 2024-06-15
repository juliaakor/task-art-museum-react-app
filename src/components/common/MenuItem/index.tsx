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
    <NavLink to={href} {...props}>
      <Container>
        {icon}
        <NavLabel>{label}</NavLabel>
      </Container>
    </NavLink>
  );
};
