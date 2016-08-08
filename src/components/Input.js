import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import colors from './../styles/color';
import {fonts} from './../styles/fonts';

export default class Input extends Component {
  static displayName = 'Input';
  static defaultProps = {
    clearOnSubmit: true
  };
  static propTypes = {
    onEntry: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    style: View.propTypes.style,
    clearOnSubmit: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onChange(text){
    this.setState({
      text: text
    });
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  }

  _onSubmit(e) {
    this.props.onEntry(e.nativeEvent.text);
    if (!!this.props.clearOnSubmit) {
      this.setState({text: ''});
    }
  }

  render() {
    return (
      <TextInput
        style={[
          styles.nameField,
          styles.wideButton,
          fonts.normal,
          this.props.style]}
        multiline={false}
        value={this.state.text}
        autoCorrect={false}
        onChangeText={this._onChange.bind(this)}
        onSubmitEditing={this._onSubmit.bind(this)}
      />
    );
  }

}

const styles = StyleSheet.create({
  nameField: {
    backgroundColor: colors.tan,
    height: 60
  },
  wideButton: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    margin: 10
  }
});