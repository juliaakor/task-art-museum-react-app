import { styled } from 'styled-components';

import { TextHighlight } from '@constants/css';

export const PageHeading = styled.h1`
  width: 40%;
  margin: auto;
  text-align: center;
  padding: var(--c-spacing-xxx-large) 0 var(--c-spacing-x-large) 0;
  color: var(--c-palette-color-gray-3);
  font-size: var(--c-font-size-7);
`;

export const SubHeading = styled.h4`
  font-size: var(--c-font-size-6);
  font-weight: var(--c-font-weight-regular);
  color: var(--c-palette-color-gray-3);
  padding: 0 0 var(--c-spacing-xxx-medium) 0;
  line-height: var(--c-line-height-text-8);
`;

export const IconButtonWrapper = styled.span`
  background: var(--c-palette-color-white-3);
  border-radius: 35px;
  padding: var(--c-spacing-medium);
  cursor: pointer;

  &:hover {
    background: var(--c-palette-color-orange-3-30);
  }
`;

interface TextHighlightWrapperProps {
  color: string;
}

export const TextHighlightWrapper = styled.span<TextHighlightWrapperProps>`
  ${({ color }) => TextHighlight(color)}
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--c-spacing-large);
  margin: 0 0 var(--c-spacing-large) 0;
`;
