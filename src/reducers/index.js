import { combineReducers } from 'redux';
import PhotosReducer from './photosreducer';
import AuthReducer from './authReducer'
import ideapadFormReducer from './ideapadformReducer';
import ideasReducer from './ideasReducer'

const rootReducer = combineReducers({
    photos: PhotosReducer,
    auth: AuthReducer,
    ideapadForm: ideapadFormReducer,
    ideas: ideasReducer,
    likes: () => []
});

export default rootReducer;