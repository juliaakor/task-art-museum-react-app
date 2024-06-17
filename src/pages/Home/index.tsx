import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { Card, CardList, Loader, Search, Section } from '@components/index';
import { API } from '@constants/api';
import { CardWrapper, PageHeading, TextHighlightWrapper } from '@styles/index';
import { PaintingCardInfoType, PaintingsListType } from '@type/api';

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

export function HomePage() {
  const theme = useTheme();
  const [data, setData] = useState<PaintingsListType | null>(null);
  const [rest, setRest] = useState<PaintingsListType | null>(null);

  useEffect(() => {
    async function getData(limit = 3) {
      const response = await fetch(`${API.baseURL}?limit=${limit}`);
      const data = await response.json();

      return data;
    }

    async function fetchData() {
      const data = await getData();
      setData(data);

      const restData = await getData(9);
      setRest(restData);
    }

    fetchData();
  }, []);

  return (
    <>
      <PageHeading>
        {`Let's Find Some `}
        <TextHighlightWrapper color={`${theme.brandPrimary}`}>Art</TextHighlightWrapper> Here!
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
      <Section info="Here some more" title="Other works for you">
        <CardWrapper>
          {rest &&
            rest.data.map((painting: PaintingCardInfoType) => (
              <Card isFullSize={false} key={painting.id} painting={painting} />
            ))}
        </CardWrapper>
      </Section>
    </>
  );
}
