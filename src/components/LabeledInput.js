import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Input from './Input';
import NormalText from './NormalText';

const styles = StyleSheet.create({
  label: {
    paddingLeft: 10,
  },
  wrapper: {
    padding: 5,
  },
});

export default class LabeledInput extends Component {
  static propTypes = {
    onEntry: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func,
    inputStyle: View.propTypes.style,
    label: React.PropTypes.string.isRequired,
    clearOnSubmit: React.PropTypes.bool,
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <NormalText style={styles.label}>
          {this.props.label}
        </NormalText>
        <Input
          onEntry={this.props.onEntry}
          clearOnSubmit={this.props.clearOnSubmit}
          onChange={this.props.onChange}
          style={[this.props.inputStyle, styles.input]}
        />
      </View>
    );
  }
}
