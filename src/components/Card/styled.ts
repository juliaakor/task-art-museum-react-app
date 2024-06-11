import { FlexVerticalCenter } from '@/constants/css';
import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: max-content;
  ${FlexVerticalCenter}
  flex-direction: column;
`;

export const Painting = styled.img`
  width: 24rem;
  height: 27rem;
  object-fit: cover;
`;
