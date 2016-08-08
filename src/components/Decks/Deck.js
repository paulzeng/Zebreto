import React, {Component} from 'react';
import {
  View
} from 'react-native';

import styles from './styles';
import Button from './../Button';
import NormalText from './../NormalText';

export default class Deck extends Component {
  static displayName = 'Deck';

  _review() {
    //TODO
    console.log(this.props)
  }

  render() {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton} onPress={this._review.bind(this)}>
          <NormalText>
            some deck
          </NormalText>
        </Button>

      </View>
    );
  }
}