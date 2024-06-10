import React from 'react';

import { IconProps } from './PropTypes';

export const BurgerMenuIcon = ({ color = '#fafafa', size = 24, ...props }: IconProps) => (
  <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 18L20 18" stroke={color} strokeLinecap="round" strokeWidth="2" />
    <path d="M4 12L20 12" stroke={color} strokeLinecap="round" strokeWidth="2" />
    <path d="M4 6L20 6" stroke={color} strokeLinecap="round" strokeWidth="2" />
  </svg>
);
