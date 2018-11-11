import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from "./inner-section";
import { authInputChange, login, ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';

class IdeaPadForm extends Component {

  render() {
    return (
      <View>
      
        <InnerSection>
          <FormInput placeholder = "Title" 
          value = {this.props.title}
          autoCapitalize = 'none'
          onChangeText={text => this.props.ideaInputChange({
              'field': 'title', 'value': text
          })} />
        </InnerSection>
        
        <InnerSection>
          <FormInput placeholder="Write Idea" 
          secureTextEntry={true}
          value = {this.props.password}
          multiline={true}
          inputStyle={{height: 200}}
          onChangeText={text => this.props.ideaInputChange({
              'field': 'idea', 'value': text
          })} 
          />
        </InnerSection>

      </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        title: state.ideapadForm.title,
        idea: state.ideapadForm.idea,
    }
}

export default connect(mapStateToProps, {ideaInputChange, login, createIdea})(IdeaPadForm);