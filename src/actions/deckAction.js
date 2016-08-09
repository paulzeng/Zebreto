import {AsyncStorage} from 'react-native';
import {createAction} from 'redux-actions';
import * as types from './deckActionTypes';
import DeckModel from './../data/Deck';

const DECK_KEY = 'zebreto-decks';

let getDecksFromObj = (val) => {
  if (val != null) {
    return JSON.parse(val).map(deckObj => {
      return DeckModel.fromObject(deckObj);
    });
  } else {
    console.info(`${DECK_KEY} not found on disk.`);
    return [];
  }
};

export const fetchDecks = createAction(types.FETCH_DECKS, async () => {
    try {
      let val = await AsyncStorage.getItem(DECK_KEY);
      return getDecksFromObj(val);
    } catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
});

export const createDeck = createAction(types.CREATE_DECK, async (deck) => {
  try {
    let val = await AsyncStorage.getItem(DECK_KEY);
    let decks = getDecksFromObj(val);
    decks.push(deck);
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks));
    return decks;
  } catch(error) {
    console.error('AsyncStorage error: ', error.message);
  }
});

export const deleteAllDecks = createAction(types.DELETE_ALL_DECKS, async () => {
  try {
    let decks = [];
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks));
    return decks;
  } catch(error) {
    console.error('AsyncStorage error: ', error.message);
  }
});
