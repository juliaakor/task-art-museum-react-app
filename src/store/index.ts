import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@store/reducers';

import { localStorageMiddleware } from './middleware';

const persistedState = localStorage.getItem('paintings')
  ? { paintings: JSON.parse(localStorage.getItem('paintings') || '') }
  : {};

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: persistedState,
  reducer: rootReducer,
});

export default store;
