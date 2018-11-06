const initialState = {
    title: '',
    idea: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'IDEA_INPUT_CHANGE':
            // newstate = [email: ''enewval, password: newval]
            return { ...state, [action.payload.field]: action.payload.value }
            break;

        case 'NEW_IDEA':
            return initialState;
            break;
        
        default:
            return state;
            break;
    }
}