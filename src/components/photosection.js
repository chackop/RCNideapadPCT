import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class PhotoSection extends Component {
  constructor() {
    super();

    this.like = false;
    this.state = { heartIcon: 'ios-heart-outline' }
  }

  toggleLike() {
    this.like = !this.like;
    if (this.like) {
      this.setState({heartIcon: 'ios-heart'})
    } else {
      this.setState({heartIcon: 'ios-heart-outline'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image 
          style={styles.thumbnail}
          source={{uri: this.props.photo.user_avatar}} />
          
          <View style={styles.titleContain}>
            <Text style={styles.username}>
              {this.props.photo.username}
            </Text>
          </View>
        </View>

        <View>
          <Image 
          style={{width: null, height: 400}}          
          source={{uri: this.props.photo.image}} />
        </View>

        <View style={styles.heartContain}>
        <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
            <Button title="Like" />
          {/* <Icon name={this.state.heartIcon} size={30}
        style= {{color: this.state.heartIcon === 'heart' ? 'red' : 'black' }}
        /> */}
        </TouchableWithoutFeedback>
        
        </View>

        <View style={styles.imageMeta}>
          <Text style={styles.username}>{this.props.photo.username}</Text>
          <Text>{this.props.photo.caption}</Text>
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