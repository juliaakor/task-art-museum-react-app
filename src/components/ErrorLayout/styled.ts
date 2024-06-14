import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const ErrorContainer = styled.div`
  height: 70vh;
  ${FlexVerticalCenter}
  flex-direction: column;
  justify-content: center;
  gap: var(--c-spacing-x-small);
  width: 30%;
  margin: 5% auto;
`;

export const ErrorHeading = styled.h1`
  font-size: var(--c-font-size-6);
`;

export const ErrorDescription = styled.p`
  font-size: var(--c-font-size-5);
`;
