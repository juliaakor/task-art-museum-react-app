import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@styles/index';

export const CardContainer = styled.div`
  position: relative;
  width: max-content;
  ${FlexVerticalCenter}
  flex-direction: column;

  &:hover {
    box-shadow: 0px 17px 39px -7px ${(props) => props.theme.textHighlight};
  }
`;

export const Painting = styled.img`
  width: 24rem;
  height: 27rem;
  object-fit: cover;
`;
