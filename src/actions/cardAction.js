import {AsyncStorage} from 'react-native';
import {createAction} from 'redux-actions';
import * as types from './cardActionTypes';
import CardModel from './../data/Card';

const CARD_KEY = 'zebreto-cards';

let getCardsFromObj = (val) => {
  if (val !== null) {
    return JSON.parse(val).map((cardObj) => {
      return CardModel.fromObject(cardObj);
    });
  }else {
    console.info(`${CARD_KEY} not found on disk.`);
    return [];
  }
};

export const fetchCards = createAction(types.FETCH_CARD, async() => {
  try {
    var val = await AsyncStorage.getItem(CARD_KEY);
    return getCardsFromObj(val);
  }catch (error) {
    console.error('AsyncStorage error: ', error.message);
  }

});

export const createCard = createAction(types.CREATE_CARD, async (card) => {
  try {
    var val = await AsyncStorage.getItem(CARD_KEY);
    let cards = getCardsFromObj(val);
    cards.push(card);
    await AsyncStorage.setItem(CARD_KEY, JSON.stringify(cards));
    return cards;
  }catch (error) {
    console.error('AsyncStorage error: ', error.message);
  }
});
export const deleteCard = createAction(types.DELETE_CARD);
export const editCard = createAction(types.EDIT_CARD);
export const deleteAllCards = createAction(types.DELETE_ALL_CARDS, async () => {
  try {
    let cards = [];
    await AsyncStorage.setItem(CARD_KEY, JSON.stringify(cards));
    return cards;
  } catch(error) {
    console.error('AsyncStorage error: ', error.message);
  }
});
