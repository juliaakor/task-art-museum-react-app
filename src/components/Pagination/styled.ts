import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const PaginationItemsContainer = styled.div`
  ${FlexVerticalCenter}
  justify-content: flex-end;
`;

interface PaginationItemProps {
  $active: boolean;
}

export const PaginationItem = styled.span<PaginationItemProps>`
  background: ${({ $active, theme }) => ($active ? `${theme.brandPrimary}` : 'transparent')};
  border-radius: 5px;
  font-size: ${({ $active }) => ($active ? 'var(--c-font-weight-semi-bold)' : 'var(--c-font-weight-thin)')};
  padding: var(--c-spacing-xx-small) var(--c-spacing-small);
  cursor: pointer;
`;

export const ArrowButton = styled.div`
  cursor: pointer;
`;
