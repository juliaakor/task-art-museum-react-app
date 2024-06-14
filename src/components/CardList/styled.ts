import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const CardListContainer = styled.div`
  ${FlexVerticalCenter}
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--c-spacing-large);
  margin: 0 0 var(--c-spacing-large) 0;
`;
