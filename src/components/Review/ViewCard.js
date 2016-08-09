import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import * as actions from './../../actions/cardAction';
import {connect} from 'react-redux';

import Button from './../Button';
import NormalText from '../NormalText';
import HeadingText from '../HeadingText';
import ContinueButton from './ContinueButton';

import styles from '../NewCard/styles';

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

  constructor(props) {
    super(props);
    this.state = {
      showingAnswer: false,
      wasCorrect: null
    };
  }

  _continue = () => {
    this.setState({
      showingAnswer: false,
      wasCorrect: null
    });
    this.props.continue();
  };

  _selectAnswer = (correct) => {
    let {cardID, orientation, updatedCard} = this.props;
    this.props.onReview(correct);
    this.setState({
      showingAnswer: true,
      wasCorrect: correct
    });
    this.props.dispatch(actions.review(cardID, orientation, correct));
    if (!!updatedCard) {
      this.props.dispatch(actions.editCard(updatedCard));
    }
  };

  _buttons() {
    let {answers, correctAnswer} = this.props;
    if (!answers) {
      return null;
    }
    return answers.map((a) => {
      let isCorrectAnswer = a == correctAnswer;
      let buttonStyle = [styles.options];
      if (this.state.showingAnswer && isCorrectAnswer) {
        if (this.state.wasCorrect) {
          buttonStyle.push(styles.rightAnswer);
        }
        else {
          buttonStyle.push(styles.wrongAnswer);
        }
      }
      return (
        <Button
          key={a}
          disabled={this.state.showingAnswer}
          style={buttonStyle}
          onPress={this._selectAnswer.bind(this, a === this.props.correctAnswer)}>
          <NormalText>
            {a}
          </NormalText>
        </Button>
      );
    });
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

export default connect()(ViewCard);