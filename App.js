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
import LoginForm from "./src/components/loginForm";
// import PlaceComp from "./src/components/placecomp";
import FuncComp from "./src/components/funccomp";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import config from './src/config'
import AppNavigator from './src/navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  componentDidMount = () => {
    
      firebase.initializeApp(config);
}

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigator />
        {/* <View style={styles.container}>
          <Header text="Photos section" />
          <LoginForm />
        </View> */}
      </Provider>
    );
    
    // return (
    //   <PlaceComp />
    // );

    // return (
    //   <Provider store={store}>
    //     <View>
    //       <Header text="Photos section" />
    //       <PhotoFeed />
    //     </View>
    //   </Provider>
    // );

    // return (
    //   <View>
    //     <FuncComp testsome="testsome" />
    //   </View>
    // )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
