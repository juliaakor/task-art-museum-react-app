/* eslint-disable indent */
import { combineReducers } from 'redux';

import { PaintingCardInfoType } from 'types';

import { DELETE_PAINTING, LOAD_PAINTINGS, PaintingActionTypes, SAVE_PAINTING } from '../actions';

const paintingsReducer = (state: PaintingCardInfoType[] = [], action: PaintingActionTypes) => {
  switch (action.type) {
    case SAVE_PAINTING:
      return state.findIndex((painting) => painting.id === action.payload.id) !== -1
        ? state
        : [...state, action.payload];
    case LOAD_PAINTINGS:
      return action.payload;
    case DELETE_PAINTING:
      return state.filter((painting) => painting.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
