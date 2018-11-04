import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet } from 'react-native'
// import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PhotoSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image 
          style={styles.thumbnail}
          source={{uri: 'http://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png'}} />
          
          <View style={styles.titleContain}>
            <Text style={styles.username}>
              Username
            </Text>
          </View>
        </View>

        <View>
          <Image 
          style={{width: null, height: 400}}          
          source={{uri: 'http://www.tompetty.com/sites/g/files/g2000007521/f/sample001.jpg'}} />
        </View>

        <View style={styles.heartContain}>
          <Button title="Like" />
          {/* <Ionicons name='ios-heart-outline' size={30} /> */}
        </View>

        <View style={styles.imageMeta}>
          <Text style={styles.username}>username</Text>
          <Text>caption</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    margin: 10,
  },
  thumbnailSection: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleContain: {
    justifyContent: 'center',
    padding: 5
  },
  imageMeta: {
    flexDirection: 'row',
    paddingRight: 5,
  },
  username: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
  heartContain: {
    padding: 10
  }
});