import { AUTH_USER, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, RESET_PASSWORD } from "../_actions/login_actions";

const initialState = {
    success: false,
    loading: false,
    auth: false,
    error: {}
};

const LoginReducer = function(state = initialState, action) {
    console.log("====== LoginReducer :::  ", action)
    switch (action.type) {
        case AUTH_USER:
            {
                return {
                    ...state,
                    auth: action.success
                }
            }
        case LOGIN_LOADING:
            {
                return {
                    ...state,
                    loading: true
                };
            }
        case LOGIN_SUCCESS:
            {
                return {
                    ...state,
                    success: true,
                    loading: false,
                    error: {}
                };
            }
        case RESET_PASSWORD:
            {
                return {
                    ...state,
                    success: true,
                    loading: false
                };
            }
        case LOGIN_ERROR:
            {
                return {
                    success: false,
                    loading: false,
                    error: action.payload
                };
            }
        default:
            {
                return state;
            }
    }
};

export default LoginReducer;