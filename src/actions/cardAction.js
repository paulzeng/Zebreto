import {AsyncStorage} from 'react-native';
import {createAction} from 'redux-actions';
import * as types from './cardActionTypes';
import cardModel from './../data/Card';

export const createCard = createAction(types.CREATE_CARD);
export const deleteCard = createAction(types.DELETE_CARD);
export const editCard = createAction(types.EDIT_CARD);