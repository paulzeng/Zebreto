import * as types from '../actions/cardActionTypes';

export default function Card(state = {}, action = {}) {
  switch (action.type) {
    case types.CREATE_CARD: {
      console.log('create card');
      return {
        ...state,
        front: 'create'
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