import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { fetchData } from '@api/index';
import { Card, CardList, ErrorBoundary, Loader, Search, Section } from '@components/index';
import { API } from '@constants/api';
import { CardWrapper, PageHeading, TextHighlightWrapper } from '@styles/index';
import { PaintingCardInfoType, PaintingsListType } from '@type/api';
import { PaintingsListSchema } from '@validation/index';

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
      const data = await fetchData({ url: `${API.baseURL}?limit=${limit}`, validationScheme: PaintingsListSchema });

      return data;
    }

    async function getAllPageData() {
      const data = await getData();
      setData(data);

      const restData = await getData(9);
      setRest(restData);
    }

    getAllPageData();
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
          <ErrorBoundary>
            {data ? (
              <CardList data={data.data} pagination={data.pagination} validationSchema={PaintingsListSchema} />
            ) : (
              <Loader />
            )}
          </ErrorBoundary>
        </CardListWrapper>
      </Section>
      <Section info="Here some more" title="Other works for you">
        <CardWrapper>
          <ErrorBoundary>
            {rest &&
              rest.data.map((painting: PaintingCardInfoType) => (
                <Card isFullSize={false} key={painting.id} painting={painting} />
              ))}
          </ErrorBoundary>
        </CardWrapper>
      </Section>
    </>
  );
}
