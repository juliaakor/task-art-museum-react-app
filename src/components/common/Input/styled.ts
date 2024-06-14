import { styled } from 'styled-components';

export const StyledInput = styled.input`
  background: var(--c-palette-color-gray-3-5);
  border-radius: 16px;
  padding: var(--c-spacing-medium);
  border: 0;
  font-size: var(--c-font-size-1);
  width: 100%;

  &::placeholder {
    color: var(--c-palette-color-gray-3-50);
  }

  &:focus {
    box-shadow: 11px 4px 24px -9px var(--c-palette-color-orange-2);
  }
`;
