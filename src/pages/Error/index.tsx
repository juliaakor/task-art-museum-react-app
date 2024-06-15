import React from 'react';

import { ErrorLayout } from '@components/ErrorLayout';
import { ROUTES } from '@constants/routes';

export const ErrorPage = () => {
  return (
    <ErrorLayout
      title="Some error occured during the execution"
      message="Try again from the start "
      redirect={ROUTES.HOME}
      redirectLabel="Home"
    />
  );
};
