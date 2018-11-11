import axios from 'axios';
import firebase from 'firebase';

export const ideaInputChange = ({ field, value }) => {
    return {
        type: 'IDEA_INPUT_CHANGE',
        payload: { field, value } // field email, text: blah
    }
}

export const createIdea = ({ title, idea }) => {
    const { uid } = firebase.auth().currentUser;
    console.log("uid", uid);
    
    return (dispatch) => {
        firebase.database()
        .ref(`/userIdeas/${uid}/ideas`)
        .push({title, idea})
        .then(() => dispatch({type: 'NEW_IDEA'}))
    }
}

export const authInputChange = ({ field, value }) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: { field, value } // field email, text: blah
    }
}

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'});
        firebase.auth().signInWithEmailAndPassword(email, password)
        // .createUserWithEmailAndPassword(email, password)
        .then(user => { dispatch({
                type: 'LOGIN_SUCCESS', payload: user
            })
        })
        .catch(function(error) {
            console.log("error", error);
            
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: error
        });
      });
    }
    
}

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