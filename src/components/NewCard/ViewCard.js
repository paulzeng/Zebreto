import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Button from './../Button';
import NormalText from './../NormalText';
import HeadingText from './../HeadingText';

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
  }



}