import { styled } from 'styled-components';

import { IconButtonWrapper, FlexVerticalCenter } from '@styles/index';

export const DetailsContainer = styled.div`
  ${FlexVerticalCenter}
  justify-content: space-between;
  width: 70%;
  margin: var(--c-spacing-xxx-large) auto;
  gap: var(--c-spacing-xx-large);

  @media (max-width: 768px) {
    margin: var(--c-spacing-xx-large) auto;
    gap: var(--c-spacing-large);
    width: 75%;
  }

  @media (max-width: 425px) {
    width: 70%;
    flex-direction: column;
    justify-content: center;
  }
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

  @media (max-width: 425px) {
    height: 32rem;
  }
`;

export const ArtistName = styled.h5`
  color: ${(props) => props.theme.textHighlight};
  font-size: var(--c-font-size-5);
  font-weight: var(--c-font-weight-regular);
  padding: 0 0 var(--c-spacing-medium) 0;
`;

export const YearsLabel = styled.span`
  color: ${(props) => props.theme.textPrimary};
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-bold);
`;
