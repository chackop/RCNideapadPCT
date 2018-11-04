import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PlaceComp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, width: 100, height: 100, backgroundColor: 'red'}} />
        <View style={{flex: 2, width: 100, height: 100, backgroundColor: 'green'}} />
        <View style={{flex: 3, width: 100, height: 100, backgroundColor: 'blue'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });