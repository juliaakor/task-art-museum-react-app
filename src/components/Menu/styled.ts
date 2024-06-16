import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const BurgerMenuButton = styled.span`
  z-index: 99;
`;

export const Navigation = styled.nav`
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: max-content;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--c-spacing-medium);
    padding-left: 35%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${(props) => props.theme.navBackground};
    z-index: 98;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
