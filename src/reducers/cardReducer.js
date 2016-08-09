import * as types from '../actions/cardActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';

export default function cardReducer(state = {}, action = {}) {
  const {type, payload, error, meta = {}} = action;
  switch (type) {
    case `${types.FETCH_CARD}_${FULFILLED}`: {
      return {
        ...state,
        cards: payload
      };
    }
    case `${types.CREATE_CARD}_${FULFILLED}`: {
      console.log('create card');
      return {
        ...state,
        cards: payload
      };
    }
    case types.DELETE_CARD: {
      console.log('delete card');
      //TODO
      return state;
    }

    case types.EDIT_CARD: {
      console.log('edit card');
      //TODO
    }

    case types.REVIEW: {
      console.log('review');
      //TODO
      return state;
    }

    default:
      return state;
  }
}