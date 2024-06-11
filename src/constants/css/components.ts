import { TextHighlight } from '@constants/css';
import styled from 'styled-components';

export const PageHeading = styled.h1`
  width: 40%;
  margin: auto;
  text-align: center;
  padding: var(--c-spacing-xxx-large) 0 var(--c-spacing-x-large) 0;
  color: var(--c-palette-color-gray-3);
  font-size: var(--c-font-size-7);
`;

interface TextHighlightWrapperProps {
  color: string;
}

export const TextHighlightWrapper = styled.span<TextHighlightWrapperProps>`
  ${({ color }) => TextHighlight(color)}
`;
