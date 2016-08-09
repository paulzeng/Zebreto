import {StyleSheet} from 'react-native';
import colors from './../../styles/color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    paddingTop: 24
  },
  alternate: {
    color: '#FFFFFF'
  },
  done: {
    alignItems: 'center'
  },
  doneButton: {
    backgroundColor: colors.tan
  }
});
