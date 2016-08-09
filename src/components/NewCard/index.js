import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';

import * as cardActions from './../../actions/cardAction';
import DeckModel from './../../data/Deck';
import CardModel from './../../data/Card';

import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';

import styles from './styles';

class NewCard extends Component {
  static propTypes = {
    deck: React.PropTypes.instanceOf(DeckModel),
    quit: React.PropTypes.func.isRequired,
    nextCard: React.PropTypes.func.isRequired,
    review: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      font: '',
      back: ''
    };
  }

  _handleFront = (text) => {
    this.setState({front: text});
  };

  _handleBack = (text) => {
    this.setState({back: text});
  };

  _createCard = () => {
    let card = new CardModel(this.state.front, this.state.back, this.props.deck.id);
    this.props.dispatch(cardActions.createCard(card));
    this.props.nextCard(this.props.deck);
  };

  _reviewDeck = () => {

  };

  render() {
    return (
      <View>
        <LabeledInput
          onEntry={this._handleFront}
          label="Font"
          clearOnSubmit={false}
          onChange={this._handleFront}/>
        <LabeledInput
          onEntry={this._handleBack}
          label="Back"
          clearOnSubmit={false}
          onChange={this._handleBack}/>
        <Button style={styles.createButton} onPress={this._createCard}>
          <NormalText>Create Card</NormalText>
        </Button>
        <View style={styles.buttonRow}>
          <Button style={styles.secondaryButton}
                  onPress={this.props.quit}>
            <NormalText>Done</NormalText>
          </Button>
          <Button style={styles.secondaryButton}
                  onPress={this._reviewDeck}>
            <NormalText>Review Deck</NormalText>
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(store => {
  return {
    cards: store.card.cards
  };
})(NewCard);

