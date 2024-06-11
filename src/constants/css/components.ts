import { FlexVerticalCenter, TextHighlight } from '@constants/css';
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

export const ErrorContainer = styled.div`
  height: 90vh;
  ${FlexVerticalCenter}
  flex-direction: column;
  justify-content: center;
  gap: var(--c-spacing-x-small);
`;

export const ErrorHeading = styled.h1`
  font-size: var(--c-font-size-6);
`;

export const ErrorDescription = styled.p`
  font-size: var(--c-font-size-5);
`;
