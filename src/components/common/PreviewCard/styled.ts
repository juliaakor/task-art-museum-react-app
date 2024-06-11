import { FlexVerticalCenter, TextLengthWrap } from '@constants/css';
import styled, { css } from 'styled-components';

interface PreviewCardProps {
  $position?: string;
  $size?: string;
}

export const PreviewCardContainer = styled.div<PreviewCardProps>`
  background: var(--c-palette-color-white-1);
  padding: var(--c-spacing-medium) 1.5rem;
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: ${({ $size }) => `${$size}`};
  position: ${({ $position }) => `${$position}`};
  bottom: -10%;
`;

export const CardArtist = styled.h5`
  color: var(--c-palette-color-orange-2);
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-regular);
  margin-bottom: var(--c-spacing-small);
  ${TextLengthWrap}
`;

export const CardTitle = styled.h4`
  color: var(--c-palette-color-gray-3);
  font-size: var(--c-font-size-3);
  font-weight: var(--c-font-weight-medium);
  ${TextLengthWrap}
`;

export const CardInfo = styled.div`
  margin-right: var(--c-spacing-xxx-small);
  width: 50%;
`;

export const CardStatus = styled.span`
  color: var(--c-palette-color-gray-3);
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-bold);
`;

const Painting = css`
  width: var(--c-size-x-small);
  height: var(--c-size-x-small);
  object-fit: cover;
  padding: var(--c-spacing-small);
`;

export const PaintingImage = styled.img`
  ${Painting}
`;

export const PaintingDefaultWrapper = styled.span`
  ${Painting}
`;
