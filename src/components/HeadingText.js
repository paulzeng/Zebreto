import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {fonts, scalingFactors} from './../styles/fonts';
let {width} = Dimensions.get('window');

export default class HeadingText extends Component {
  static displayName = 'HeadingText';
  static propTypes = {
    style: Text.propTypes.style
  };

  render() {
    return (
      <Text style={[this.props.style, fonts.big, scaled.big]}>
        {this.props.children}
      </Text>
    );
  }
}

const scaled = StyleSheet.create({
  big: {
    fontSize: width / scalingFactors.big
  }
});
