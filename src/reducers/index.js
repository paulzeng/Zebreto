import {combineReducers} from "redux";

import card from "./cardReducer";
import deck from "./deckReducer";

export default combineReducers({
  deck,
  card
});