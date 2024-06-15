import React, { ReactElement } from 'react';
import { Link, To } from 'react-router-dom';

import { TextHighlightWrapper } from '@constants/css';

import { ErrorContainer, ErrorDescription, ErrorHeading } from './styled';

interface ErrorLayoutProps {
  children?: ReactElement;
  message: string;
  redirect: To;
  redirectLabel?: string;
  title: string;
}

export const ErrorLayout = ({ children, message, redirect, redirectLabel, title }: ErrorLayoutProps) => {
  return (
    <ErrorContainer>
      <ErrorHeading>{title}</ErrorHeading>
      <ErrorDescription>
        {message}
        <Link to={redirect}>
          <TextHighlightWrapper color="var(--c-palette-color-orange-1)">{redirectLabel}</TextHighlightWrapper>
        </Link>
        {children}
      </ErrorDescription>
    </ErrorContainer>
  );
};
