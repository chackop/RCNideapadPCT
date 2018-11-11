import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from "./inner-section";
import { authInputChange, login, ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapadForm'


class EditIdea extends Component {
    
    edit() {
        
        const { title, idea } = this.props;

        this.props.editIdea({title, idea});
    }

    delete() {
        
        const { title, idea } = this.props;

        this.props.deleteIdea({title, idea});
    }

  render() {
    return (
      <View style={styles.container}>
      
        <IdeaPadForm />

        <InnerSection>
            <Button title="Save" onPress={this.edit.bind(this)} backgroundColor="blue" />
        </InnerSection>

         <InnerSection>
            <Button title="Delete" onPress={this.delete.bind(this)} backgroundColor="red" />
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

export default connect(mapStateToProps, {ideaInputChange, login, createIdea})(EditIdea);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });