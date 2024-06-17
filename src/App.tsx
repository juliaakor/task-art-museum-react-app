import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary, Footer, Navbar } from '@components/index';
import { themes } from '@constants/css';

import GlobalStyle from './global';
import { router } from './router';

export function App() {
  return (
    <ThemeProvider theme={themes['light']}>
      <ErrorBoundary>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar />
          <Routes>
            {router.map(({ Component, path }) => {
              return <Route Component={Component} key={path} path={path}></Route>;
            })}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
