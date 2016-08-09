import {AsyncStorage} from 'react-native';
import {createAction} from 'redux-actions';
import * as types from './deckActionTypes';
import deckModel from './../data/Deck';

const DECK_KEY = 'zebreto-decks';

export const fetchDecks = createAction(types.FETCH_DECKS, async () => {
    try {
      let val = await AsyncStorage.getItem(DECK_KEY);
      if (val != null) {
        let decks = JSON.parse(val).map(deckObj => {
          return deckModel.fromObject(deckObj);
        });
        return decks;
      } else {
        console.info(`${DECK_KEY} not found on disk.`);
      }
    } catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
});

export const createDeck = createAction(types.CREATE_DECK, async (deck) => {
  try {
    let val = await AsyncStorage.getItem(DECK_KEY);
    if (val == null) {
      val = '[]';
    }
    let decks = JSON.parse(val).map(deckObj => {
      return deckModel.fromObject(deckObj);
    });
    decks.push(deck);
    await AsyncStorage.setItem(DECK_KEY, JSON.stringify(decks));
    return decks;
  } catch(error) {
    console.error('AsyncStorage error: ', error.message);
  }
});

export const deleteAllDecks = createAction(types.DELETE_ALL_DECKS, async () => {
  try {
    await AsyncStorage.clear();
    return [];
  } catch(error) {
    console.error('AsyncStorage error: ', error.message);
  }
});