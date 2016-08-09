import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Button from './../Button';
import NormalText from './../NormalText';
import HeadingText from './../HeadingText';
import ContinueButton from './ContinueButton';

import styles from './styles';

class ViewCard extends Component {
  static propTypes = {
    continue: React.PropTypes.func.isRequired,
    quit: React.PropTypes.func.isRequired,
    onReview: React.PropTypes.func.isRequired,
    orientation: React.PropTypes.string.isRequired,
    cardID: React.PropTypes.string.isRequired,
    answers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    correctAnswer: React.PropTypes.string.isRequired,
    prompt: React.PropTypes.string.isRequired
  };

  getInitialState() {
    return {
      showingAnswer: false,
      wasCorrect: null
    };
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  _continue() {
    this.setState(this.getInitialState());
    this.props.continue();
  }

  _selectAnswer(correct) {
    this.props.onReview(correct);
    this.setState({
      showingAnswer: true,
      wasCorrect: correct
    });
    // CardActions.review(this.props.cardID, this.props.orientation, correct)
  }

  _buttons() {

  }

  render() {
    const buttons = this._buttons();
    return (
      <View>
        <HeadingText>
          {this.props.prompt}
        </HeadingText>
        {buttons}
        {
          this.state.showingAnswer
            ? <ContinueButton onPress={this._continue}
                              wasCorrect={this.state.wasCorrect}/>
            : <Button onPress={this.props.quit} style={styles.continueButton}>
            <NormalText>Stop Reviewing</NormalText>
          </Button>
        }
      </View>
    );
  }
}