import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const Header = styled.header`
  ${FlexVerticalCenter}
  justify-content: space-around;
  padding: var(--c-spacing-xxx-medium) 0;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;
