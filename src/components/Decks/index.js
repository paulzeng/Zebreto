import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './../../actions/deckAction'

import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from './../../data/Deck';

class Decks extends Component {
  static displayName = 'Decks';
  static propTypes = {
    //TODO
  };

  constructor(props) {
    super(props);
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    this.props.actions.fetchDecks();
  }

  _loadDecks() {
    if (!this.state.decks) {
      return null;
    }

    return this.state.decks.map(deck => {
      return (
        <Deck />//TODO
      );
    });
  }

  _newDeck(name) {
    let deck = new DeckModel(name);
    this.props.actions.createDeck(deck);
  }

  render() {
    return (
      <View>
        {this._loadDecks()}
        <DeckCreation newDeck={this._newDeck.bind(this)}/>
      </View>
    );
  }
}

export default connect(store => {
  console.log(store);
  return store;
}, dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
})(Decks);