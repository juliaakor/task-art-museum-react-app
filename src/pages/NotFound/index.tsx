import React from 'react';

import { ErrorLayout } from '@components/index';
import { ROUTES } from '@constants/routes';

export function NotFoundPage() {
  return (
    <ErrorLayout
      title="Page was not found"
      message="Try again from the start "
      redirect={ROUTES.HOME}
      redirectLabel="Home"
    />
  );
}
