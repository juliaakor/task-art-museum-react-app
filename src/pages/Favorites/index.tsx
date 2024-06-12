import { Card } from '@components/Card';
import { BookmarkIcon } from '@components/Icons';
import { Section } from '@components/Section';
import { CardWrapper, PageHeading, TextHighlightWrapper as TextHighlight } from '@constants/css';
import { RootState } from '@store/reducers';
import React from 'react';
import { useSelector } from 'react-redux';
import { PaintingCardInfoType } from 'types';

import { TextHighlightWrapper } from './styled';

export const FavoritesPage = () => {
  const paintings = useSelector((state: RootState) => state.paintings);

  return (
    <>
      <PageHeading>
        Here are your{' '}
        <TextHighlight color="var(--c-palette-color-orange-1)">
          {' '}
          <TextHighlightWrapper>
            <BookmarkIcon size={64} /> Favorites
          </TextHighlightWrapper>
        </TextHighlight>
      </PageHeading>
      <Section info="Saved by you" title="Your favorites list">
        <CardWrapper>
          {paintings.map((painting: PaintingCardInfoType) => (
            <Card isFullSize={false} key={painting.id} painting={painting} />
          ))}
        </CardWrapper>
      </Section>
    </>
  );
};
