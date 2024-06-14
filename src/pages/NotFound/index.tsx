import React from 'react';

import { ErrorLayout } from '@components/ErrorLayout';
import { ROUTES } from '@constants/routes';

export const NotFoundPage = () => {
  return (
    <ErrorLayout
      title="Page was not found"
      message="Try again from the start "
      redirect={ROUTES.HOME}
      redirectLabel="Home"
    />
  );
};
