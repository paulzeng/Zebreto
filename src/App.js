import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Zebreto from './components/Zebreto';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Zebreto />
      </Provider>
    );
  }
}