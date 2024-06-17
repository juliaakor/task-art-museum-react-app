import React from 'react';

import { IconProps } from './PropTypes';

export function ArrowIcon({ color = '#393939', height = 15, width = 10, ...props }: IconProps) {
  return (
    <svg fill="none" height={height} viewBox="0 0 10 15" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}
