import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';

import NormalText from './../NormalText';
import HeadingText from './../HeadingText';
import Button from './../Button';

import styles from './styles';

class Review extends Component {
  static displayName = 'Review';
  static propTypes = {
    deckID: React.PropTypes.string.isRequired,
    quit: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0
    }
  }


  render() {
    return (
      <View>

      </View>
    );
  }

}

export default connect(store => {
  return {
    cards: store.cards
  }
})(Review);