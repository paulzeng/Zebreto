//base
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import {connect} from 'react-redux';

import actions from './../actions';

//components
import Heading from './Header';
import Decks from './Decks';
import NewCard from './NewCard';
import Button from './Button';
import NormalText from './NormalText';

class Zebreto extends Component {
  static displayName:'Zebreto';

  componentWillMount() {
  }

  _review(deckID) {
    this.props.dispatch(actions.reviewDeck());
    this.refs.navigator.push({
      name: 'review',
      data: {
        deckID: deckID
      }
    });
  }

  _createdCard(deck) {
    this.refs.navigator.push({
      name: 'createCards',
      data: {
        deck: deck
      }
    });
  }

  _goHome() {
    this.refs.navigator.popToTop();
  }

  _deleteAll() {
    console.log(actions);
    this.props.dispatch(actions.deleteAllDecks());
    this.props.dispatch(actions.deleteAllCards());
  }

  _renderScene(route) {
    switch (route.name) {
      case 'decks': {
        return (
          <View>
            <Decks createCard={this._createdCard.bind(this)}
                   review={this._review.bind(this)}
            />
            <Button onPress={this._deleteAll.bind(this)}>
              <NormalText>Delete All the Things</NormalText>
            </Button>
          </View>

        );
      }
      case 'createCards': {
        return <NewCard
          review={this._review.bind(this)}
          quit={this._goHome.bind(this)}
          nextCard={this._createdCard.bind(this)}
          {...route.data}/>;
      }
      default:
        console.error('Encountered unexpected route: ' + route.name);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <Navigator
          ref='navigator'
          initialRoute={{name: 'decks'}}
          renderScene={this._renderScene.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default connect(store => {
  return store;
})(Zebreto);