import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, FormInput } from 'react-native-elements';
import InnerSection from "./inner-section";

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