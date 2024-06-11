import { ErrorContainer, ErrorDescription, ErrorHeading, TextHighlightWrapper } from '@constants/css';
import { ROUTES } from '@constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorHeading>Some error occured during the execution</ErrorHeading>
      <ErrorDescription>
        Try again from the start{' '}
        <Link to={ROUTES.HOME}>
          <TextHighlightWrapper color="var(--c-palette-color-orange-1)">Home</TextHighlightWrapper>
        </Link>
      </ErrorDescription>
    </ErrorContainer>
  );
};
