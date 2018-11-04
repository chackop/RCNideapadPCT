import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import axios from 'axios';
import PhotoSection from "./photosection";

export default class PhotoFeed extends Component {
    state = { photos: [{username: 'HelloUser'}] };

    componentDidMount() {
        axios.get('http://localhost:3000/photos')
        .then(
            resp => { 
                // console.log(resp.status);
                this.setState({ photos: resp.data });
            }
        );
    }

    getPhotos() {
        return this.state.photos.map(_photo => {
           return (<PhotoSection key={_photo.id} photo={_photo} />);
        });
    }

  render() {
    return (
      <ScrollView>
        {this.getPhotos()}
      </ScrollView>
    );
  }
}