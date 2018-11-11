import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

export default class IdeaList extends Component {
  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <ListItem
          title={'Dummy'}
          leftIcon={{name: 'lightbulb-outline'}}
        />
      </List>
    )
  }
}