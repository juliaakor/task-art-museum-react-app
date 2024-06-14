import { Middleware } from 'redux';

import { SAVE_PAINTING } from '@store/actions';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === SAVE_PAINTING) {
    const { paintings } = store.getState();
    localStorage.setItem('paintings', JSON.stringify(paintings));
  }

  return result;
};
