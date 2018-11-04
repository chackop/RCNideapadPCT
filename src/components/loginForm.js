import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, FormInput } from 'react-native-elements';
import InnerSection from "./inner-section";
import firebase from 'firebase';

componentDidMount = () => {
    const config = {
        apiKey: "AIzaSyCOg_WZIBgjDOKkuGmRK8SZ29st1tqNMNo",
        authDomain: "rcnauthideapad.firebaseapp.com",
        databaseURL: "https://rcnauthideapad.firebaseio.com",
        projectId: "rcnauthideapad",
        storageBucket: "rcnauthideapad.appspot.com",
        messagingSenderId: "773038312425"
      };
      firebase.initializeApp(config);
};


export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <InnerSection>
        <FormInput placeholder="Email" />
      </InnerSection>
      
      <InnerSection>
        <FormInput placeholder="Password" secureTextEntry={true} />
      </InnerSection>

        <Button title="Login" backgroundColor="red" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });