import * as types from './../actions/deckActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';

export default function deckReducer(state = {}, action = {}, root={}) {
  const {type, payload, error, meta = {}} = action;
  switch (type) {
    case `${types.FETCH_DECKS}_${FULFILLED}`: {
      return {
        ...state,
        decks: payload
      };
    }

    case `${types.CREATE_DECK}_${FULFILLED}`: {
      console.log('create deck');
      return {
        ...state,
        decks: payload
      }
    }

    case `${types.DELETE_ALL_DECKS}_${FULFILLED}`: {
      console.log('delete all decks');
      return {
        ...state,
        decks: payload
      }
    }

    case types.DELETE_DECK: {
      console.log('delete decks');
      //TODO
      return state;
    }

    default:
      return state;
  }
};