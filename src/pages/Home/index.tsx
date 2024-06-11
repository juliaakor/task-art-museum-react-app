import { Section } from '@components/Section';
import { PageHeading, TextHighlightWrapper } from '@constants/css';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <PageHeading>
        Let's Find Some <TextHighlightWrapper color="var(--c-palette-color-orange-1)">Art</TextHighlightWrapper> Here!
      </PageHeading>
      <Section info="Topics for you" title="Our special gallery">
      </Section>
      <Section info="Here some more" title="Other works for you"></Section>
    </>
  );
};
