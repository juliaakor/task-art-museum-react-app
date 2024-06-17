import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { Schema } from 'yup';

import { getBaseApiUrl } from '@api/index';
import { Input } from '@components/common';
import { SearchIcon } from '@components/Icons';
import { CardList } from '@components/index';
import { useDebounce } from '@hooks/index';
import { PaintingsListType } from '@type/api';

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

export const Search = ({ children, initialValues, placeholder, validationSchema }: SearchProps) => {
  const [searchResults, setSearchResults] = useState<PaintingsListType>();
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((query: string) => {
    setQuery(query);
  }, []);

  useEffect(() => {
    if (!query) return;
    const fetchPaintings = async () => {
      const response = await fetch(`${getBaseApiUrl(query)}`);
      const data = await response.json();
      setSearchResults({ ...data, key: Date.now() });
    };

    fetchPaintings();
  }, [query]);

  const debouncedSearch = useDebounce({ cb: handleSearch, delay: 300 });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSearch(values.query);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <SearchWrapper>
            <FieldWrapper>
              <Field name="query">
                {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                  <Input
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      debouncedSearch(e.target.value);
                    }}
                    placeholder={placeholder}
                    value={field.value}
                  />
                )}
              </Field>
              <SubmitIcon type="submit">
                <SearchIcon size={18} />
              </SubmitIcon>
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
            {searchResults && (
              <CardList
                key={searchResults.key}
                data={searchResults.data}
                isFullSize={false}
                pagination={searchResults.pagination}
                query={query}
              />
            )}
          </CardListWrapper>
        </Form>
      )}
    </Formik>
  );
};
