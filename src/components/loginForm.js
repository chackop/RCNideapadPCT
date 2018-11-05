import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, FormInput } from 'react-native-elements';
import InnerSection from "./inner-section";
import firebase from 'firebase';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';


class LoginForm extends Component {
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
    }
    
    login() {
        console.log("enter login func");
        
        const { email, password } = this.props;
        this.props.login(email, password);
    }

  render() {
    return (
      <View style={styles.container}>
      
      <InnerSection>
        <FormInput placeholder = "Email" 
        value = {this.props.email}
        onChangeText={text => this.props.authInputChange({
            'field': 'email', 'value': text
        })} />
      </InnerSection>
      
      <InnerSection>
        <FormInput placeholder="Password" 
        secureTextEntry={true}
        value = {this.props.password}
        onChangeText={text => this.props.authInputChange({
            'field': 'password', 'value': text
        })} />
      </InnerSection>

        <Button title="Login" onPress={()=> this.login.bind(this)} backgroundColor="red" />
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });