import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from "./inner-section";
import { authInputChange, login, ideaInputChange, createIdea, editIdeas, deleteIdeas } from '../actions';
import { connect } from 'react-redux';
import IdeaPadForm from './ideapadForm';
import _ from 'lodash';

class EditIdea extends Component {

    componentDidMount = () => {
      const { params } = this.props.navigation.state;
      _.each(params.idea, (value, field) => {
          this.props.ideaInputChange({
            field,
            value
          });
      })
    }
    
    
    edit() {
        const { id } = this.props.navigation.state.params.idea;
        const { title, idea } = this.props;
        this.props.editIdeas({title, idea, id});
        this.props.navigation.navigate('Ideas');
    }

    delete() {
        const { id } = this.props.navigation.state.params.idea;
        this.props.deleteIdeas({id});
        this.props.navigation.navigate('Ideas');
    }

  render() {
    return (
      <View style={styles.container}>
      
        <IdeaPadForm {...this.props} />

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

export default connect(mapStateToProps, {ideaInputChange, login, createIdea, editIdeas, deleteIdeas})(EditIdea);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });