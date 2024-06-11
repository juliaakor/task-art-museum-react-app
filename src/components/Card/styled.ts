import { FlexVerticalCenter } from '@/constants/css';
import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: max-content;
  ${FlexVerticalCenter}
  flex-direction: column;

  &:hover {
    box-shadow: 0px 17px 39px -7px var(--c-palette-color-orange-2);
  }
`;

export const Painting = styled.img`
  width: 24rem;
  height: 27rem;
  object-fit: cover;
`;
