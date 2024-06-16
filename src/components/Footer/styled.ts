import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const Footer = styled.footer`
  ${FlexVerticalCenter}
  justify-content: space-around;
  padding: var(--c-spacing-xxx-medium) 0;
  background: ${(props) => props.theme.footerBackground};
`;
