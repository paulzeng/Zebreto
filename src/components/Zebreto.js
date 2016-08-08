//base
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//actions
import actions from './../actions';

//components
import Heading from './Header';
import Decks from './Decks';

// @connect()
class Zebreto extends Component {
  static displayName:'Zebreto';

  componentWillMount() {
    const {actions, card, deck} = this.props;
    console.log('Zebreto action' + actions);
    console.log(card);
    console.log(deck);
  }

  renderScene(route) {
    switch (route.name) {
      case 'decks': {
        return <Decks {...this.props}/>
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <Navigator
          ref='navigator'
          initialRoute={{name: 'decks'}}
          renderScene={this.renderScene}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});

export default connect(store => {
  return store;
}, dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
})(Zebreto);