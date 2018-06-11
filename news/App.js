import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import store from './src/redux/store/index_store.js'

// import Main from './src/components/main.js'
import Nav from './src/route/nav.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}
