import React from 'react';

import { IconProps } from './PropTypes';

export function NotFoundIcon({ color = '#E0A449', size = 80 }: IconProps) {
  return (
    <svg fill="none" height={size} viewBox="0 0 80 80" width={size} xmlns="http://www.w3.org/2000/svg">
      <rect height="79" stroke={color} width="79" x="0.5" y="0.5" />
      <path d="M18.2205 64H61.2205" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M25.2205 55V38" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M35.2205 55V38" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M44.2205 55V38" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M54.2205 55V38" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M39.2204 16L58.2205 28H20.2205L39.2204 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
