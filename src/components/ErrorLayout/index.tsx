import React, { ReactElement } from 'react';
import { Link, To } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { TextHighlightWrapper } from '@styles/index';

import { ErrorContainer, ErrorDescription, ErrorHeading } from './styled';

interface ErrorLayoutProps {
  children?: ReactElement;
  message: string;
  redirect: To;
  redirectLabel?: string;
  title: string;
}

export const ErrorLayout = ({ children, message, redirect, redirectLabel, title }: ErrorLayoutProps) => {
  const theme = useTheme();

  return (
    <ErrorContainer>
      <ErrorHeading>{title}</ErrorHeading>
      <ErrorDescription>
        {message}
        <Link to={redirect}>
          <TextHighlightWrapper color={`${theme.brandPrimary}`}>{redirectLabel}</TextHighlightWrapper>
        </Link>
        {children}
      </ErrorDescription>
    </ErrorContainer>
  );
};
