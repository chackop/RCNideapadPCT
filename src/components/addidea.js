import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from "./inner-section";
import { authInputChange, login, ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapadForm'


class AddIdea extends Component {
    
    create() {
        const { title, idea } = this.props;
        this.props.createIdea({title, idea});
        this.props.navigation.navigate('Ideas');
    }

  render() {
    return (
      <View style={styles.container}>
      
        <IdeaPadForm />

        <InnerSection>
            <Button title="Submit" onPress={this.create.bind(this)} backgroundColor="red" />
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

export default connect(mapStateToProps, {ideaInputChange, login, createIdea})(AddIdea);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });