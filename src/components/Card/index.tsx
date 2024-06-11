import { PreviewCard } from '@components/common';
import { getPaintingImageUrl } from '@utils/api';
import React from 'react';
import { PaintingCardInfoType } from 'types';

import { CardContainer, Painting } from './styled';

interface CardProps {
  isFullSize?: boolean;
  painting: PaintingCardInfoType;
}

export const Card = ({ isFullSize = true, painting }: CardProps) => {
  return (
    <CardContainer>
      {isFullSize && <Painting src={getPaintingImageUrl(painting.image_id)} />}
      <PreviewCard isFullSize={isFullSize} {...painting} />
    </CardContainer>
  );
};
