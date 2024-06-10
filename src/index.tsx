import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ErrorPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<ErrorPage />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
