import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const Container = styled.div`
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: max-content;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.inputPlaceholder};
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
