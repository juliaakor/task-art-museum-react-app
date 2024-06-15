import { Dispatch } from 'redux';

import { PaintingCardInfoType } from '@type/api';

export const SAVE_PAINTING = 'SAVE_PAINTING';
export const LOAD_PAINTINGS = 'LOAD_PAINTINGS';
export const DELETE_PAINTING = 'DELETE_PAINTING';

interface Action<T, P> {
  type: T;
  payload: P;
}

export type SavePaintingAction = Action<typeof SAVE_PAINTING, PaintingCardInfoType>;
export type LoadPaintingsAction = Action<typeof LOAD_PAINTINGS, PaintingCardInfoType[]>;
export type DeletePaintingAction = Action<typeof DELETE_PAINTING, number>;

function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
  return { payload, type };
}

export const savePainting = (painting: PaintingCardInfoType): SavePaintingAction =>
  createAction(SAVE_PAINTING, painting);

export const loadPaintings = (paintings: PaintingCardInfoType[]): LoadPaintingsAction =>
  createAction(LOAD_PAINTINGS, paintings);

export const deletePainting = (id: number): DeletePaintingAction => createAction(DELETE_PAINTING, id);

export type PaintingActionTypes = SavePaintingAction | LoadPaintingsAction | DeletePaintingAction;

export type AppDispatch = Dispatch<PaintingActionTypes>;
