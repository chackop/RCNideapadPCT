import { combineReducers } from 'redux';
import PhotosReducer from './photosreducer';
import AuthReducer from './authReducer'
import ideapadFormReducer from './ideapadformReducer';

const rootReducer = combineReducers({
    photos: PhotosReducer,
    auth: AuthReducer,
    ideapadForm: ideapadFormReducer,
    likes: () => []
});

export default rootReducer;