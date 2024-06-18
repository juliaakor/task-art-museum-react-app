import {
  SAVE_PAINTING,
  LOAD_PAINTINGS,
  DELETE_PAINTING,
  savePainting,
  loadPaintings,
  deletePainting,
} from '@store/actions';
import { PaintingCardInfoType } from '@type/api';

describe('action creators', () => {
  it('should create an action to save a painting', () => {
    const painting: PaintingCardInfoType = {
      artist_title: 'Leonardo da Vinci',
      id: 1,
      image_id: 'abcd1234',
      is_public_domain: true,
      title: 'Mona Lisa',
    };
    const expectedAction = {
      payload: painting,
      type: SAVE_PAINTING,
    };
    expect(savePainting(painting)).toEqual(expectedAction);
  });

  it('should create an action to load paintings', () => {
    const paintings: PaintingCardInfoType[] = [
      {
        artist_title: 'Vincent van Gogh',
        id: 2,
        image_id: 'efgh5678',
        is_public_domain: true,
        title: 'Starry Night',
      },
      {
        artist_title: 'Pablo Picasso',
        id: 3,
        image_id: 'ijkl9101',
        is_public_domain: false,
        title: 'Les Demoiselles Avignon',
      },
    ];
    const expectedAction = {
      payload: paintings,
      type: LOAD_PAINTINGS,
    };
    expect(loadPaintings(paintings)).toEqual(expectedAction);
  });

  it('should create an action to delete a painting', () => {
    const id = 1;
    const expectedAction = {
      payload: id,
      type: DELETE_PAINTING,
    };
    expect(deletePainting(id)).toEqual(expectedAction);
  });
});

describe('action types', () => {
  it('should define SAVE_PAINTING', () => {
    expect(SAVE_PAINTING).toBe('SAVE_PAINTING');
  });

  it('should define LOAD_PAINTINGS', () => {
    expect(LOAD_PAINTINGS).toBe('LOAD_PAINTINGS');
  });

  it('should define DELETE_PAINTING', () => {
    expect(DELETE_PAINTING).toBe('DELETE_PAINTING');
  });
});
