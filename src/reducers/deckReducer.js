import * as types from '../actions/deckActionTypes';

export default function Deck(state = {}, action = {}) {
  const {payload, error, meta = {}} = action;
  switch (action.type) {
    case types.FETCH_DECKS: {
      console.log('fetch decks');
      return {
        ...state,
        decks: payload
      };
    }

    case types.CREATE_DECK: {
      console.log('create deck')
      return {
        ...state,
        name: 'create_deck'
      }
    }

    case types.DELETE_ALL_DECKS: {
      console.log('delete all decks')
    }

    case types.DELETE_DECK: {
      console.log('delete decks')
    }

    case types.REVIEW_DECK: {
      console.log('review deck')
    }
  }

  return state;
};