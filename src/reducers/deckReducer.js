import * as types from './../actions/deckActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';
import moment from 'moment';
import _ from 'lodash';

export default function deckReducer(state = {}, action = {}) {
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

    case types.REVIEW_DECK: {
      console.log('review deck');
      console.log(state);
      let deck = state.decks.filter((d) => {
        return d.id === payload;
      });
      if (deck.length !== 1) {
        return;
      }

      let now = moment();
      let qualifyingCards = state.cardReducer.cards.filter((c) => {
        return c.deckID === deck.id && now >= c.dueDate;
      });

      let makeReviews = (sideOne, sideTwo) => {
        return qualifyingCards.map((card) => {
          let others = qualifyingCards.filter((other) => {
            return other.id !== card.id;
          });

          return {
            orientation: sideOne,
            cardID: card.id,
            prompt: card[sideOne],
            correctAnswer: card[sideTwo],
            answers: [card[sideTwo]].concat(
              _.sample(_.pluck(others, sideTwo), 3))
          };
        });
      };

      let reviews = makeReviews('front', 'back').concat(makeReviews('back', 'front'));

      return {
        ...state,
        reviews: _.shuffle(reviews)
      }
    }

    default:
      return state;
  }
};