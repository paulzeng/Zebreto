import React, {Component} from 'react';
import {
  View,
  ListView
} from 'react-native';
import {connect} from 'react-redux';

import * as cardActions from './../../actions/cardAction';
import * as deckActions from './../../actions/deckAction';

import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from './../../data/Deck';
import Button from './../Button';
import NormalText from './../NormalText';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Decks extends Component {
  static displayName = 'Decks';
  static propTypes = {
    createCard: React.PropTypes.func.isRequired,
    review: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  _renderRow = (rowData) => {
    return <Deck
      key={rowData.id}
      deck={rowData}
      addCards={this.props.createCard}
      onReview={this.props.review}/>;
  };

  _newDeck = (name) => {
    let deck = new DeckModel(name);
    this.props.dispatch(deckActions.createDeck(deck));
  };

  _deleteAll = () => {
    this.props.dispatch(deckActions.deleteAllDecks());
    this.props.dispatch(cardActions.deleteAllCards());
  };

  _renderFooter = () => {
    return (
      <View>
        <DeckCreation newDeck={this._newDeck}/>
        <Button onPress={this._deleteAll}>
          <NormalText>Delete All the Things</NormalText>
        </Button>
      </View>
    );
  }


  render() {
    const {decks} = this.props;
    return (
      <View>
        <ListView dataSource={ds.cloneWithRows(decks || [])}
                  renderRow={this._renderRow}
                  enableEmptySections={true}
                  renderFooter={this._renderFooter}
        />
      </View>
    );
  }
}

export default connect(store => {
  return {
    decks: store.deck.decks
  };
})(Decks);