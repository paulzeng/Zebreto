import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import {fonts, scalingFactors} from './../styles/fonts';

let {width} = Dimensions.get('window');

export default class NormalText extends Component {
  static displayName =  'NormalText';
  static propTypes = {
    style: Text.propTypes.style
  }

  render() {
    return (
      <Text style={[this.props.style, fonts.normal, scaled.normal]}>
        {this.props.children}
      </Text>
    );
  }
}

const scaled = StyleSheet.create({
  normal: {
    fontSize: width / scalingFactors.normal
  }
});