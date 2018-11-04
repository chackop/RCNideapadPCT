import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import axios from 'axios';
import PhotoSection from "./photosection";
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class PhotoFeed extends Component {
    // state = { photos: [{username: 'HelloUser'}] };

    componentDidMount() {
       this.props.getPhotos();
    }

    renderPhotos() {
        return this.props.photos.map(_photo => {
           return (<PhotoSection key={_photo.id} photo={_photo} />);
        });
    }

  render() {
    return (
      <ScrollView>
        {this.renderPhotos()}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
    return {
        photos: state.photos,
        likes: state.likes
    }
}

export default connect(mapStateToProps, {getPhotos})(PhotoFeed);