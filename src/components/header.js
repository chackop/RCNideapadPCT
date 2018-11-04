import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f8f8f8',
      borderBottomColor: '#ddd',
      borderBottomWidth: 2,
      marginTop: 14,
      alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 13,
    }
  });