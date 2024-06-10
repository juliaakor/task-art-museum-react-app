import React from 'react';

import { IconProps } from './PropTypes';

export const BookmarkIcon = ({ color = '#F17900', size = 25, ...props }: IconProps) => (
  <svg fill="none" height={size} viewBox="0 0 25 25" width={size} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.5444 21.5444L12.5444 17.5444L5.54445 21.5444V5.54443C5.54445 5.014 5.75516 4.50529 6.13024 4.13022C6.50531 3.75515 7.01402 3.54443 7.54445 3.54443H17.5444C18.0749 3.54443 18.5836 3.75515 18.9587 4.13022C19.3337 4.50529 19.5444 5.014 19.5444 5.54443V21.5444Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
