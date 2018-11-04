import { combineReducers } from 'redux';
import PhotosReducer from './photosreducer'

const rootReducer = combineReducers({
    photos: PhotosReducer,
    likes: () => []
});

export default rootReducer;