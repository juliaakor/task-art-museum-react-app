import { styled } from 'styled-components';

export const StyledInput = styled.input`
  background: ${(props) => props.theme.inputBackground};
  border-radius: 16px;
  padding: var(--c-spacing-medium);
  border: 0;
  font-size: var(--c-font-size-1);
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }

  &:focus {
    box-shadow: 11px 4px 24px -9px ${(props) => props.theme.textHighlight};
  }
`;
