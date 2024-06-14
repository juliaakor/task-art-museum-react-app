import React from 'react';
import { Link } from 'react-router-dom';

import { ErrorContainer, ErrorDescription, ErrorHeading, TextHighlightWrapper } from '@constants/css';
import { ROUTES } from '@constants/routes';

export const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ErrorHeading>Page was not found</ErrorHeading>
      <ErrorDescription>
        Try again from the start{' '}
        <Link to={ROUTES.HOME}>
          <TextHighlightWrapper color="var(--c-palette-color-orange-1)">Home</TextHighlightWrapper>
        </Link>
      </ErrorDescription>
    </ErrorContainer>
  );
};
