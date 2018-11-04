import axios from 'axios';

export function getPhotos() {
    return (dispatch) => {
        axios.get('http://localhost:3000/photos')
        .then(
            resp => {
                 dispatch({
                    type: 'GET_PHOTOS',
                    payload: resp.data
                });
            }
        );
    }

   
}