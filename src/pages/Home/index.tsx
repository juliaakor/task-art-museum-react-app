/* eslint-disable react/no-unescaped-entities */
import { CardList } from '@components/CardList';
import { Loader } from '@components/Loader';
import { Search } from '@components/Search';
import { Section } from '@components/Section';
import { API } from '@constants/api';
import { PageHeading, TextHighlightWrapper } from '@constants/css';
import React, { useEffect, useState } from 'react';
import { PaintingsListType } from 'types';
import * as Yup from 'yup';

import { CardListWrapper, SearchWrapper } from './styled';

const validationSchema = Yup.object({
  query: Yup.string().required(),
});

interface SearchFormValues {
  query: string;
}

const initialValues: SearchFormValues = {
  query: '',
};

export const HomePage = () => {
  const [data, setData] = useState<PaintingsListType | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${API.baseURL}?limit=3`);
      const data = await response.json();
      setData(data);
    };

    getData();
  }, []);

  return (
    <>
      <PageHeading>
        Let's Find Some <TextHighlightWrapper color="var(--c-palette-color-orange-1)">Art</TextHighlightWrapper> Here!
      </PageHeading>
      <SearchWrapper>
        <Search
          initialValues={initialValues}
          placeholder="Search Art, Artist, Work..."
          validationSchema={validationSchema}
        />
      </SearchWrapper>
      <Section info="Topics for you" title="Our special gallery">
        <CardListWrapper>
          {data ? <CardList data={data.data} pagination={data.pagination} /> : <Loader />}
        </CardListWrapper>
      </Section>
      <Section info="Here some more" title="Other works for you"></Section>
    </>
  );
};
