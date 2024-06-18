import React, { ReactElement } from 'react';

import { ModalContent, ModalOverlay, ModalWrapper } from './styled';

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
}

export function Modal({ children, isOpen }: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalWrapper className="modal">
            <ModalContent className="modal-content">{children}</ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </>
  );
}
