import React from 'react';

import { IconProps } from './PropTypes';

export function HomeIcon({ color = '#E0A449', height = 25, width = 24, ...props }: IconProps) {
  return (
    <svg fill="none" height={height} viewBox="0 0 24 25" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0304 20.7893 21.5391 20.4142 21.9142C20.0391 22.2893 19.5304 22.5 19 22.5H5C4.46957 22.5 3.96086 22.2893 3.58579 21.9142C3.21071 21.5391 3 21.0304 3 20.5V9.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M9 22.5V12.5H15V22.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
