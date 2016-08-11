import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { fonts, scalingFactors } from './../styles/fonts';

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  normal: {
    fontSize: width / scalingFactors.normal,
  },
});

export default class NormalText extends Component {
  static displayName = 'NormalText';
  static propTypes = {
    style: Text.propTypes.style,
    children: React.Children.isRequired,
  };

  render() {
    return (
      <Text style={[this.props.style, fonts.normal, scaled.normal]}>
        {this.props.children}
      </Text>
    );
  }
}
