//base
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import {connect} from 'react-redux';

//components
import Heading from './Header';
import Decks from './Decks';

// @connect()
class Zebreto extends Component {
  static displayName:'Zebreto';

  componentWillMount() {
  }

  _renderScene(route) {
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
          renderScene={this._renderScene}/>
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
})(Zebreto);