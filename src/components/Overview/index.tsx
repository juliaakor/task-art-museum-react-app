import React from 'react';
import { useTheme } from 'styled-components';

import { SubHeading, TextHighlightWrapper } from '@styles/index';
import { FullPaintingInfoType } from '@validation/index';

import { PropertyWrapper } from './styled';

export function Overview({
  credit_line,
  dimensions,
  gallery_title,
  is_public_domain,
  place_of_origin,
}: FullPaintingInfoType) {
  const theme = useTheme();

  return (
    <div>
      <SubHeading>Overview</SubHeading>
      <PropertyWrapper>
        <TextHighlightWrapper color={`${theme.textHighlight}`}>Artist nationality:</TextHighlightWrapper>{' '}
        {place_of_origin}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color={`${theme.textHighlight}`}>Dimensions: Sheet:</TextHighlightWrapper> {dimensions}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color={`${theme.textHighlight}`}>Credit Line:</TextHighlightWrapper> {credit_line}
      </PropertyWrapper>
      <PropertyWrapper>
        <TextHighlightWrapper color={`${theme.textHighlight}`}>Repository:</TextHighlightWrapper> {gallery_title}
      </PropertyWrapper>
      <PropertyWrapper>{is_public_domain ? 'Public' : 'Private'}</PropertyWrapper>
    </div>
  );
}
