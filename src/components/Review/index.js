import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';

import NormalText from './../NormalText';
import HeadingText from './../HeadingText';
import Button from './../Button';
import ViewCard from './ViewCard';

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
      currentReview: 0,
      reviews: props.reviews
    }
  }

  _onReview = (correct) => {
    if (correct) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    this.setState({numReviewed: this.state.numReviewed + 1});
  };

  _nextReview = () => {
    this.setState({
      currentReview: this.state.currentReview + 1
    });
  };

  _contents = () => {
    if (!this.state.reviews || this.state.reviews.length === 0) {
      return null;
    }

    if (this.state.currentReview < this.state.reviews.length) {
      return (
        <ViewCard
          onReview={this._onReview}
          continue={this._nextReview}
          updateCard={this.props.updatedCard}
          quit={this.props.quit}
          {...this.state.reviews[this.state.currentReview]}
        />
      );
    }
    else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return (
        <View style={styles.done}>
          <HeadingText style={styles.alternate}>
            Reviews cleared!
          </HeadingText>
          <NormalText style={styles.alternate}>
            {Math.round(percent * 100)}% correct
          </NormalText>
          <Button onPress={this.props.quit} style={styles.doneButton}>
            <NormalText>Done</NormalText>
          </Button>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.blue}>
        {this._contents()}
      </View>
    );
  }

}

export default connect(store => {
  return {
    reviews: store.card.reviews,
    updatedCard:store.card.updatedCard
  }
})(Review);