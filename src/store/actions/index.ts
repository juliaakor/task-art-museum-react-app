import { PaintingCardInfoType } from '@type/api';

export const SAVE_PAINTING = 'SAVE_PAINTING';
export const LOAD_PAINTINGS = 'LOAD_PAINTINGS';
export const DELETE_PAINTING = 'DELETE_PAINTING';

export interface SavePaintingAction {
  [key: string]: PaintingCardInfoType | typeof SAVE_PAINTING;
  payload: PaintingCardInfoType;
  type: typeof SAVE_PAINTING;
}

export interface LoadPaintingsAction {
  [key: string]: PaintingCardInfoType[] | typeof LOAD_PAINTINGS;
  payload: PaintingCardInfoType[];
  type: typeof LOAD_PAINTINGS;
}

export interface DeletePaintingAction {
  [key: string]: number | typeof DELETE_PAINTING;
  payload: number;
  type: typeof DELETE_PAINTING;
}

export const savePainting = (painting: PaintingCardInfoType): SavePaintingAction => ({
  payload: painting,
  type: SAVE_PAINTING,
});

export const loadPaintings = (paintings: PaintingCardInfoType[]): LoadPaintingsAction => ({
  payload: paintings,
  type: LOAD_PAINTINGS,
});

export const deletePainting = (id: number): DeletePaintingAction => ({
  payload: id,
  type: DELETE_PAINTING,
});

export type PaintingActionTypes =
  | ReturnType<typeof deletePainting>
  | ReturnType<typeof loadPaintings>
  | ReturnType<typeof savePainting>;
