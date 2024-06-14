import React from 'react';

import { SubHeading, TextHighlightWrapper } from '@constants/css';
import { FullPaintingInfoType } from '@utils/yup';

import { PropertyWrapper } from './styled';

export const Overview = ({
  credit_line,
  dimensions,
  gallery_title,
  is_public_domain,
  place_of_origin,
}: FullPaintingInfoType) => {
  return (
    <div>
      <SubHeading>Overview</SubHeading>
      <PropertyWrapper>
        <TextHighlightWrapper color="var(--c-palette-color-orange-2)">Artist nationality:</TextHighlightWrapper>{' '}
        {place_of_origin}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color="var(--c-palette-color-orange-2)">Dimensions: Sheet:</TextHighlightWrapper>{' '}
        {dimensions}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color="var(--c-palette-color-orange-2)">Credit Line:</TextHighlightWrapper> {credit_line}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color="var(--c-palette-color-orange-2)">Repository:</TextHighlightWrapper> {gallery_title}
      </PropertyWrapper>
      <PropertyWrapper>{is_public_domain ? 'Public' : 'Private'}</PropertyWrapper>
    </div>
  );
};
