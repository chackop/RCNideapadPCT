import { combineReducers } from 'redux';
import PhotosReducer from './photosreducer';
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
    photos: PhotosReducer,
    auth: AuthReducer,
    likes: () => []
});

export default rootReducer;