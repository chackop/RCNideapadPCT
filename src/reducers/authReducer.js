const initialState = {
    email: '',
    password: '',
    user: {},
    err: ''
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_INPUT_CHANGE':
            // newstate = [email: ''enewval, password: newval]
            return { ...state, [action.payload.field]: action.payload.value }
            break;
        case 'LOGIN_SUCCESS':
            console.log('login success')
            // newstate = [email: ''enewval, password: newval]
            return { ...state, user: action.payload }
            break;
        case 'LOGIN_FAILURE':
            console.log('login failure')
            // newstate = [email: ''enewval, password: newval]
            return { ...state, error: 'Authentication Failed' }
            break;
        default:
            return state;
            break;
    }
}