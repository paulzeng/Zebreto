import {StyleSheet} from "react-native";
import colors from "./../../styles/color";

export default StyleSheet.create({
  deckGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
    marginBottom: 5
  },
  deckButton: {
    backgroundColor: colors.pink,
    padding: 10,
    margin: 0,
    flex: 1
  },
  editButton: {
    width: 60,
    backgroundColor: colors.pink2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  },
  nameField: {
    backgroundColor: colors.tan,
    height: 40
  },
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  },
  createDeck: {
    backgroundColor: colors.green
  },
  enterDeck: {
    backgroundColor: colors.tan
  }
});