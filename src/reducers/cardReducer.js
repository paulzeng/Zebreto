import * as types from '../actions/cardActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';

export default function Card(state = {}, action = {}) {
  const {type, payload, error, meta = {}} = action;
  switch (type) {
    case `${types.CREATE_CARD}_${FULFILLED}`: {
      console.log('create card');
      return {
        ...state,
        cards: payload
      };
    }

    case types.DELETE_CARD: {
      console.log('delete card')
    }

    case types.EDIT_CARD: {
      console.log('edit card')
    }

    case types.REVIEW: {
      console.log('review')
    }
  }

  return state;
}