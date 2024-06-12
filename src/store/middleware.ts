import { SAVE_PAINTING } from '@store/actions';
import { Middleware } from 'redux';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === SAVE_PAINTING) {
    const { paintings } = store.getState();
    localStorage.setItem('paintings', JSON.stringify(paintings));
  }

  return result;
};
