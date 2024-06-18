import { savePainting, loadPaintings, deletePainting, PaintingActionTypes } from '@store/actions';
import paintingsReducer, { RootState } from '@store/reducers';

describe('paintingsReducer', () => {
  it('should add a new painting when receiving SAVE_PAINTING action', () => {
    const initialState = { paintings: [] } as RootState;
    const newPainting = {
      artist_title: 'Vincent van Gogh',
      id: 1,
      image_id: 'test123',
      is_public_domain: true,
      title: 'Starry Night',
    };
    const action = savePainting(newPainting);

    const newState = paintingsReducer(initialState, action);
    expect(newState.paintings).toHaveLength(1);
    expect(newState.paintings[0]).toEqual(newPainting);
  });

  it('should replace state with loaded paintings when receiving LOAD_PAINTINGS action', () => {
    const initialState = { paintings: [] } as RootState;
    const loadedPaintings = [
      { artist_title: 'Vincent van Gogh', id: 1, image_id: '123', is_public_domain: true, title: 'Starry Nigh' },
      {
        artist_title: 'Pablo Picasso',
        id: 2,
        image_id: '456',
        is_public_domain: false,
        title: 'Les Demoiselles Avignon',
      },
    ];
    const action = loadPaintings(loadedPaintings);

    const newState = paintingsReducer(initialState, action);
    expect(newState.paintings).toEqual(loadedPaintings);
  });

  it('should remove a painting when receiving DELETE_PAINTING action', () => {
    const initialState = {
      paintings: [
        { artist_title: 'Vincent van Gogh', id: 1, image_id: '123', is_public_domain: true, title: 'Starry Nigh' },
        {
          artist_title: 'Pablo Picasso',
          id: 2,
          image_id: '456',
          is_public_domain: false,
          title: 'Les Demoiselles Avignon',
        },
      ],
    };
    const action = deletePainting(1);

    const newState = paintingsReducer(initialState, action);
    expect(newState.paintings).toHaveLength(1);
    expect(newState.paintings[0].id).toEqual(2);
  });

  it('should return current state for unknown action types', () => {
    const initialState = {
      paintings: [
        { artist_title: 'Vincent van Gogh', id: 1, image_id: '123', is_public_domain: true, title: 'Starry Nigh' },
      ],
    };
    const action = { payload: {}, type: 'UNKNOWN_ACTION' };

    const newState = paintingsReducer(initialState, action as PaintingActionTypes);
    expect(newState).toEqual(initialState);
  });
});
