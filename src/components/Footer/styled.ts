import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const Footer = styled.footer`
  ${FlexVerticalCenter}
  justify-content: space-around;
  padding: var(--c-spacing-xxx-medium) 0;
  background: var(--c-palette-color-white-1);
`;
