import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, RESET_PASSWORD } from "../_actions/login_actions";

const initialState = {
    success: false,
    loading: false,
    error: {
        username: null,
        password: null
    }
};

const LoginReducer = function(state = initialState, action) {
    switch (action.type) {
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
                    loading: false
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
                    error: action.data
                };
            }
        default:
            {
                return state;
            }
    }
};

export default LoginReducer;