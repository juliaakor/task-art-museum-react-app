import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { BookmarkIcon } from '@components/Icons';
import { Card, Section } from '@components/index';
import { RootState } from '@store/reducers';
import { CardWrapper, PageHeading, TextHighlightWrapper as TextHighlight } from '@styles/index';
import { PaintingCardInfoType } from '@type/api';

import { TextHighlightWrapper } from './styled';

export function FavoritesPage() {
  const theme = useTheme();
  const paintings = useSelector((state: RootState) => state.paintings);

  return (
    <>
      <PageHeading>
        Here are your{' '}
        <TextHighlight color={`${theme.brandPrimary}`}>
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
}
