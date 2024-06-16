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
