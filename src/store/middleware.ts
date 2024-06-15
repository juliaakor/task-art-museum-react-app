import { Middleware } from 'redux';

import { DELETE_PAINTING, SAVE_PAINTING, PaintingActionTypes } from '@store/actions';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const typedAction = action as PaintingActionTypes;

  if (typedAction.type === SAVE_PAINTING || typedAction.type === DELETE_PAINTING) {
    const { paintings } = store.getState();
    localStorage.setItem('paintings', JSON.stringify(paintings));
  }

  return result;
};
