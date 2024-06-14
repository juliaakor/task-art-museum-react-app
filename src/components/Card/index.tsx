import React from 'react';
import { Link } from 'react-router-dom';

import { PreviewCard } from '@components/common';
import { PaintingCardInfoType } from '@type/api';
import { getPaintingImageUrl } from '@utils/api';

import { CardContainer, Painting } from './styled';

interface CardProps {
  isFullSize?: boolean;
  painting: PaintingCardInfoType;
}

export const Card = ({ isFullSize = true, painting }: CardProps) => {
  return (
    <Link to={`/${painting.id}`}>
      <CardContainer>
        {isFullSize && <Painting src={getPaintingImageUrl(painting.image_id)} />}
        <PreviewCard isFullSize={isFullSize} {...painting} />
      </CardContainer>
    </Link>
  );
};
