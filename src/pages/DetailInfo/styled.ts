import { FlexVerticalCenter, IconButtonWrapper } from '@constants/css';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: 70%;
  margin: var(--c-spacing-xxx-large) auto;
  gap: var(--c-spacing-xx-large);
`;

export const PaintingImage = styled.img`
  width: 32rem;
  height: 35rem;
  object-fit: cover;
`;

export const PaintingWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled(IconButtonWrapper)`
  position: absolute;
  right: var(--c-spacing-medium);
  top: var(--c-spacing-medium);
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35rem;
`;

export const ArtistName = styled.h5`
  color: var(--c-palette-color-orange-2);
  font-size: var(--c-font-size-5);
  font-weight: var(--c-font-weight-regular);
  padding: 0 0 var(--c-spacing-medium) 0;
`;

export const YearsLabel = styled.span`
  color: var(--c-palette-color-gray-3);
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-bold);
`;
