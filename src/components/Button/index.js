import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import styles from "./styles";

export default class Button extends Component {
  static displayName = 'Button';
  static defaultProps = {
    disable: false
  };
  static propTypes:{
    onPress: React.PropTypes.func.isRequired,
    style: View.propTypes.style,
    children: React.PropTypes.object,
    disabled: React.PropTypes.bool
  };

  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <TouchableOpacity
        style={[styles.wideButton, this.props.style]}
        onPress={this.props.onPress}
        activeOpacity={opacity} >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}