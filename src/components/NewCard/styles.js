import {StyleSheet} from 'react-native';
import colors from "./../../styles/color";

export default StyleSheet.create({
  createButton: {
    backgroundColor: colors.green
  },
  secondaryButton: {
    backgroundColor: colors.blue
  },
  buttonRow: {
    flexDirection: 'row'
  },
  options: {
    backgroundColor: '#FFFFFF'
  },
  continueButton: {
    backgroundColor: colors.tan
  },
  rightAnswer: {
    backgroundColor: colors.green
  },
  wrongAnswer: {
    backgroundColor: colors.pink
  }
});