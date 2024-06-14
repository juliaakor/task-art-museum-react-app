import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const Container = styled.div`
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: max-content;

  &:hover {
    background: var(--c-palette-color-gray-3-50);
  }
`;

export const NavLabel = styled.span`
  padding: 3px 8px 3px 3px;
  text-decoration: none;
  color: #ffffff;
  font-weight: var(--c-font-weight-regular);
  font-size: var(--c-font-size-2);
  border-radius: 10px;

  @media (max-width: 500px) {
    font-size: var(--c-font-size-5);
  }
`;
