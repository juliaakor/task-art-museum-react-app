import { css } from 'styled-components';

import './hooks.css';
export * from './components';

export const TextHighlight = (color = 'var(--c-palette-color-orange-1)') => css`
  color: ${color};
`;

export const TextLengthWrap = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FlexVerticalCenter = css`
  display: flex;
  align-items: center;
`;
