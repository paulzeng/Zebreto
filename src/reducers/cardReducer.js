import * as types from '../actions/cardActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';
import CardReview from './../data/Review';
import moment from 'moment';
import _ from 'lodash';

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
      return state;
    }

    case types.REVIEW_CARDS: {
      console.log('reviewCards');
      let {cards} = state;
      let now = moment();
      let qualifyingCards = cards.filter((c) => {
        return c.deckID === payload && now >= c.dueDate;
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
              _.sample(_.map(others, sideTwo), 3))
          };
        });
      };

      let reviews = _.shuffle(makeReviews('front', 'back').concat(makeReviews('back', 'front')));

      let cardReviews = qualifyingCards.map((card) => {
        return new CardReview(card);
      });

      let _cardReviews = {};
      cardReviews.forEach((cr) => {
        _cardReviews[cr.card.id] = cr;
      });


      return {
        ...state,
        reviews: reviews,
        cardReviews: _cardReviews
      }
    }

    case types.REVIEW: {
      let {cardReviews} = state;
      let {cardID, orientation, correct} = payload;
      let cardReview = cardReviews[cardID];
      if (orientation === 'front') {
        cardReview.reviewFront(correct);
      }else {
        cardReview.reviewBack(correct);
      }

      if (cardReview.done()) {
        let change = cardReview.correct ? 1 : -1;
        let card = cardReview.card;

        card.strength = card.strength + change;
        if (card.strength < 0) { card.strength = 0; }
        card.dueDate = CardReview.newDueDate(card.strength);
        return {
          ...state,
          updatedCard: card
        };
      }
      return {
        ...state,
        updatedCard:null
      };
    }

    default:
      return state;
  }
}