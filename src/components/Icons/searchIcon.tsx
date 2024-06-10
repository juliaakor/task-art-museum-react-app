import React from 'react';

import { IconProps } from './PropTypes';

export const SearchIcon = ({ color = '#393939', size = 32, ...props }: IconProps) => (
  <svg fill="none" height={size} viewBox="0 0 32 32" width={size} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M28 28L22 22" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);
