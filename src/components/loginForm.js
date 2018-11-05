import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
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

        this.props.login({email, password});
    }

    showButton() {
       if (this.props.loading) {
           return (
               <View>
                   <ActivityIndicator size={'small'}/>
               </View>
           );
       }
        return (<Button title="Login" onPress={this.login.bind(this)} backgroundColor="red" />)
    }

    showError() {
        if (this.props.error) {
            return (
                <FormValidationMessage>
                    {this.props.error}
                </FormValidationMessage>
            );
        }
    }

  render() {
    return (
      <View style={styles.container}>
      
      <InnerSection>
        <FormInput placeholder = "Email" 
        value = {this.props.email}
        autoCapitalize = 'none'
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
      <InnerSection>
        {this.showButton()}
      </InnerSection>
      <InnerSection>
        {this.showError()}
      </InnerSection>  
      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        user: state.auth.user,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });