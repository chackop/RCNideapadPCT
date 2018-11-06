import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from "./inner-section";
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapadForm';
import IdeaList from './idealist';


class LoginForm extends Component {
    
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
      if (this.props.user) {
        <IdeaList />
      }

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