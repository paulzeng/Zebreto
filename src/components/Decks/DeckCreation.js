import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import CreateDeckButton from "./CreateDeckButton";
import EnterDeck from "./EnterDeck";

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