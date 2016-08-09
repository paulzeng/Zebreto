import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import styles from "./styles";
import Input from "./../Input";
import CreateDeckButton from "./CreateDeckButton";

export default class EnterDeck extends Component {
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