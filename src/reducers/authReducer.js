const initialState = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false
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
            return { ...state, user: action.payload, loading: false }
            break;

        case 'LOADING':
            console.log('loading')
            return { ...state, loading: true }
            break;

        case 'LOGIN_FAILURE':
            console.log('login failure')
            // newstate = [email: ''enewval, password: newval]
            return { ...state, error: 'Authentication Failed', loading: false }
            break;
        default:
            return state;
            break;
    }
}