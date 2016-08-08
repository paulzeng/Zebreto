import { StyleSheet } from 'react-native';

export const fonts = StyleSheet.create({
  normal: {
    fontSize: 24,
    fontFamily: 'Avenir Medium'
  },

  alternate: {
    fontSize: 50,
    fontFamily: 'Avenir Heavy',
    color: '#FFFFFF'
  },

  big: {
    fontSize: 32,
    alignSelf: 'center',
    fontFamily: 'Avenir Medium'
  }
});

export const scalingFactors = {
  normal: 15,
  big: 7
};
