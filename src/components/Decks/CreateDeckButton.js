import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import styles from "./styles";
import Button from "./../Button";
import NormalText from "./../NormalText";

export default class CreateDeckButton extends Component {
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

