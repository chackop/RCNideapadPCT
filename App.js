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
import PlaceComp from "./src/components/placecomp";

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
      <View>
        <Header text="Photos section" />
        <PhotoSection />
      </View>
    );
  }
}
