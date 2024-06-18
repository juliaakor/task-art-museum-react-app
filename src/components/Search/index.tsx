import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Schema } from 'yup';

import { fetchData, getBaseApiUrl } from '@api/index';
import { Input } from '@components/common';
import { SearchIcon } from '@components/Icons';
import { CardList, ErrorBoundary, SearchToolbar } from '@components/index';
import { useDebounce } from '@hooks/index';
import { PaintingsListType } from '@type/api';
import { searchArtworkListSchema } from '@validation/index';

import { CardListWrapper, FieldWrapper, SearchError, SearchWrapper, SubmitIcon } from './styled';

interface SearchProps {
  children?: React.ReactNode;
  initialValues: SearchFormValues;
  placeholder?: string;
  validationSchema: Schema;
}

interface SearchFormValues {
  query: string;
}

const MemoizedCardList = memo(CardList);

export function Search({ children, initialValues, placeholder, validationSchema }: SearchProps) {
  const [searchResults, setSearchResults] = useState<PaintingsListType>();
  const [query, setQuery] = useState('');
  const [params, setParams] = useState('');

  const handleSearch = useCallback(function (query: string) {
    setQuery(query);
  }, []);

  const fetchPaintings = useCallback(
    async function () {
      const data = await fetchData({
        url: `${getBaseApiUrl(query)}${params}`,
        validationScheme: searchArtworkListSchema,
      });
      setSearchResults({ ...data, key: Date.now() });
    },
    [params, query]
  );

  useEffect(() => {
    if (!query) return;

    fetchPaintings();
  }, [fetchPaintings, params, query]);

  const debouncedSearch = useDebounce({ cb: handleSearch, delay: 300 });

  const handleOnSubmit = useCallback(
    function (values: SearchFormValues) {
      handleSearch(values.query);
    },
    [handleSearch]
  );

  const handleSearchToolbarChange = useCallback(function (search: string) {
    setParams(search);
  }, []);

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit} validationSchema={validationSchema}>
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <SearchWrapper>
            <FieldWrapper>
              <Field name="query">
                {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => {
                  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
                    handleChange(e);
                    debouncedSearch(e.target.value);
                  }

                  return <Input {...field} onChange={handleOnChange} placeholder={placeholder} value={field.value} />;
                }}
              </Field>
              <SubmitIcon type="submit">
                <SearchIcon size={18} />
              </SubmitIcon>
              <SearchToolbar setSearchQuery={handleSearchToolbarChange} />
            </FieldWrapper>
            <ErrorMessage
              component="div"
              name="query"
              render={() => (
                <SearchError>Search is empty! Cant find anything? Scroll below for more inspiration...</SearchError>
              )}
            />
            {children}
          </SearchWrapper>
          <CardListWrapper>
            <ErrorBoundary>
              {searchResults && (
                <MemoizedCardList
                  key={searchResults.key}
                  data={searchResults.data}
                  isFullSize={false}
                  pagination={searchResults.pagination}
                  query={query}
                  validationSchema={searchArtworkListSchema}
                />
              )}
            </ErrorBoundary>
          </CardListWrapper>
        </Form>
      )}
    </Formik>
  );
}
