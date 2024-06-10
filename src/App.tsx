import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './global';
import { router } from './router';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {router.map(({ Component, path }) => {
          return <Route Component={Component} key={path} path={path}></Route>;
        })}
      </Routes>
    </BrowserRouter>
  );
};
