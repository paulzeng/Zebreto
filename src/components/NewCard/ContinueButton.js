import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Button from './../Button';
import NormalText from './../NormalText';

import styles from './styles';

export default class ContinueButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    wasCorrect: React.PropTypes.bool.isRequired
  };

  render() {
    let text = this.props.wasCorrect
        ? 'Correct! Next card?'
        : 'Oops, not quite. Next card?'
      ;
    return (
      <Button onPress={this.props.onPress} style={styles.continueButton}>
        <NormalText>{text}</NormalText>
      </Button>
    );
  }
}