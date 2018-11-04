import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';
import PhotoSection from "./photosection";

export default class PhotoFeed extends Component {
    state = { photos: [{username: 'Hello'}] };

    componentDidMount() {
        axios.get('http://localhost:3000/photos')
        .then(
            resp => { 
                console.log(resp.status);
                this.setState({ photos: resp.data });
            }
        );
    }

  render() {
    return (
      <View>
        <PhotoSection />
        <Text> {this.state.photos[0].username} </Text>
      </View>
    );
  }
}