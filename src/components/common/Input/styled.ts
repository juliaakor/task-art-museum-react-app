import { styled } from 'styled-components';

import { DefaultInput } from '@styles/index';

export const StyledInput = styled.input`
  ${DefaultInput}
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }

  &:focus {
    box-shadow: 11px 4px 24px -9px ${(props) => props.theme.textHighlight};
  }
`;
