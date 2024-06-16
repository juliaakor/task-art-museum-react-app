import { styled } from 'styled-components';

import { TextHighlight } from './global';

export const PageHeading = styled.h1`
  width: 40%;
  margin: auto;
  text-align: center;
  padding: var(--c-spacing-xxx-large) 0 var(--c-spacing-x-large) 0;
  color: ${(props) => props.theme.textPrimary};
  font-size: var(--c-font-size-7);
`;

export const SubHeading = styled.h4`
  font-size: var(--c-font-size-6);
  font-weight: var(--c-font-weight-regular);
  color: ${(props) => props.theme.textPrimary};
  padding: 0 0 var(--c-spacing-xxx-medium) 0;
  line-height: var(--c-line-height-text-8);
`;

export const IconButtonWrapper = styled.span`
  background: ${(props) => props.theme.buttonBackground};
  border-radius: 35px;
  padding: var(--c-spacing-medium);
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.buttonActiveBackground};
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
