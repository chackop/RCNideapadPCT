/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Header from "./src/components/header";
import PhotoSection from "./src/components/photosection";
import PhotoFeed from "./src/components/photofeed";
// import PlaceComp from "./src/components/placecomp";
import FuncComp from "./src/components/funccomp";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  render() {
    // return (
    //   <PlaceComp />
    // );

    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header text="Photos section" />
          <PhotoFeed />
        </View>
      </Provider>
    );

    // return (
    //   <View>
    //     <FuncComp testsome="testsome" />
    //   </View>
    // )
  }
}
