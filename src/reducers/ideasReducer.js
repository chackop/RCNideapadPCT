const initialState = {
    title: '',
    idea: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_IDEAS':
            return action.payload;
            break;
        
        default:
            return state;
            break;
    }
}