import React, {Component} from 'react';
import {
  View
} from 'react-native';

import styles from './styles';
import Button from './../Button';
import NormalText from './../NormalText';

import DeckModel from './../../data/Deck';

export default class Deck extends Component {
  static displayName = 'Deck';
  static propTypes = {
    onReview: React.PropTypes.func.isRequired,
    deck: React.PropTypes.instanceOf(DeckModel),
    addCards: React.PropTypes.func.isRequired
  };

  _review() {
    this.props.onReview(this.props.deck.id);
  }

  _addCards() {
    this.props.addCards(this.props.deck);
  }

  render() {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton} onPress={this._review.bind(this)}>
          <NormalText>
            {this.props.deck.name}:{this.props.deck.dueCards} due
          </NormalText>
        </Button>

        <Button style={styles.editButton}
                onPress={this._addCards.bind(this)}>
          <NormalText>+</NormalText>
        </Button>
      </View>
    );
  }
}