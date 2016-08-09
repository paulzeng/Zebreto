import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';

import * as cardActions from './../../actions/cardAction';
import DeckModel from './../../data/Deck';

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

  _handleFront(text) {
    this.setState({front: text});
  }

  _handleBack(text) {
    this.setState({front: text});
  }

  _createCard() {
    this.props.dispatch(cardActions.createCard({
      front: this.state.front,
      back: this.state.back,
      deck: this.props.deck
    }));
    this.props.nextCard(this.props.deck);
  }

  _reviewDeck() {

  }

  render() {
    return (
      <View>
        <LabeledInput
          onEntry={this._handleFront.bind(this)}
          label="Font"
          clearOnSubmit={false}
          onChange={this._handleFront.bind(this)}/>
        <LabeledInput
          onEntry={this._handleBack.bind(this)}
          label="Back"
          clearOnSubmit={false}
          onChange={this._handleBack.bind(this)}/>
        <Button style={styles.createButton} onPress={this._createCard.bind(this)}>
          <NormalText>Create Card</NormalText>
        </Button>
        <View style={styles.buttonRow}>
          <Button style={styles.secondaryButton}
                  onPress={this.props.quit}>
            <NormalText>Done</NormalText>
          </Button>
          <Button style={styles.secondaryButton}
                  onPress={this._reviewDeck.bind(this)}>
            <NormalText>Review Deck</NormalText>
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(store => {
  return {
    cards: store.cards
  };
})(NewCard);

