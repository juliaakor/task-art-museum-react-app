import { FlexVerticalCenter } from '@constants/css';
import styled from 'styled-components';

export const TextHighlightWrapper = styled.span`
  ${FlexVerticalCenter}
  justify-content: center;

  & svg {
    padding: 4px;
  }
`;

export const CardWrapper = styled.div`
  ${FlexVerticalCenter}
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--c-spacing-large);
  margin: 0 0 var(--c-spacing-large) 0;
`;
