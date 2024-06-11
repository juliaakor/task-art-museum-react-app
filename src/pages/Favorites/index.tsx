import { BookmarkIcon } from '@components/Icons';
import { Section } from '@components/Section';
import { PageHeading, TextHighlightWrapper as TextHighlight } from '@constants/css';
import React from 'react';

import { TextHighlightWrapper } from './styled';

export const FavoritesPage = () => {
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
      <Section info="Saved by you" title="Your favorites list"></Section>;
    </>
  );
};
