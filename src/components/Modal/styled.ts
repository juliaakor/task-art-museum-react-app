import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const ModalOverlay = styled.div`
  ${FlexVerticalCenter}
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  z-index: 99;
  margin-top: var(--c-spacing-large);
`;

export const ModalWrapper = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  padding: var(--c-spacing-x-medium);
  border-radius: 8px;
  box-shadow: 0 0 10px ${(props) => props.theme.inputBackground};
`;

export const ModalContent = styled.div`
  padding: var(--c-spacing-xx-small);
`;
