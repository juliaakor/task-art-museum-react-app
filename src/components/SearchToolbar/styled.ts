import { styled } from 'styled-components';

import { DefaultInput } from '@styles/index';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--c-spacing-xx-small);
  padding: var(--c-spacing-xx-small);
`;

export const StyledSelect = styled.select`
  ${DefaultInput}
  padding: var(--c-spacing-small);
`;

export const StyledOption = styled.option`
  ${DefaultInput}
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: var(--c-spacing-x-small);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.buttonActiveBackground};
  }
`;
