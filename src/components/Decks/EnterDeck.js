import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import styles from './styles';
import Button from './../Button';
import NormalText from './../NormalText';
import Input from './../Input';

class CreateDeckButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <Button
        style={styles.createDeck}
        onPress={this.props.onPress}>
        <NormalText>Create Deck</NormalText>
      </Button>
    );
  }
}

class EnterDeck extends Component {
  static propTypes = {
    create: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onChange(text) {
    this.setState({text: text});
  }

  _create() {
    this.props.create(this.state.text);
  }

  render() {
    return (
      <View style={styles.enterDeck}>
        <Input onEntry={this.props.create}
               onChange={this._onChange.bind(this)} />
        <CreateDeckButton onPress={this._create.bind(this)} />
      </View>
    );
  }
}

export default class DeckCreation extends Component {
  static propTypes = {
    newDeck: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {showingNameField: false};
  }

  _newDeck(name) {
    this.props.newDeck(name);
    this.setState({
      showingNameField: false
    });
  }

  _showField() {
    this.setState({
      showingNameField: true
    });
  }

  render() {
    let contents = this.state.showingNameField
      ? <EnterDeck create={this._newDeck.bind(this)}/>
      : <CreateDeckButton onPress={this._showField.bind(this)}/>;
    return contents;
  }

}