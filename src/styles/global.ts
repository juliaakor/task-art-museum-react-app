import { css } from 'styled-components';

export const TextHighlight = (color = '${(props) => props.theme.brandPrimary}') => css`
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

export const DefaultInput = css`
  background: ${(props) => props.theme.inputBackground};
  border-radius: 16px;
  padding: var(--c-spacing-medium);
  border: 0;
  font-size: var(--c-font-size-1);
`;
