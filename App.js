/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from "./src/Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./src/redux/reducers/index";

const store = createStore(appReducer);




class App extends PureComponent {
  render() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
}
}



export default App;

