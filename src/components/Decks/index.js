import React, {Component} from 'react';
import {
  View,
  ListView
} from 'react-native';
import {connect} from 'react-redux';

import * as actions from './../../actions/deckAction'

import Deck from './Deck';
import DeckCreation from './DeckCreation';
import DeckModel from './../../data/Deck';

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
    this.props.dispatch(actions.createDeck(deck));
  };

  render() {
    const {decks} = this.props;
    return (
      <View>
        <ListView dataSource={ds.cloneWithRows(decks || [])}
                  renderRow={this._renderRow}
                  enableEmptySections={true}
        />
        <DeckCreation newDeck={this._newDeck}/>
      </View>
    );
  }
}

export default connect(store => {
  return {
    decks: store.deck.decks
  };
})(Decks);