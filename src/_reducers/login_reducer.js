import { AUTH_USER, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, RESET_PASSWORD, LOGIN_USER } from "../_actions/login_actions";

const initialState = {
    user: {
        accessToken: undefined,
        refreshToken: undefined,
        userData: {
            id: undefined,
            userId: undefined,
            username: undefined
        }
    },
    auth: false,
    error: {}
};

const LoginReducer = function (state = initialState, action) {
    console.log("====== LoginReducer :::  ", action)
    switch (action.type) {
        case AUTH_USER:
            {
                return {
                    ...state,
                    user: action.payload.data,
                    auth: action.payload.success
                }
            }
        case LOGIN_USER:
            {
                return {
                    ...state,
                    user: action.payload,
                    auth: true,
                    error: {}
                };
            }
        case LOGIN_ERROR:
            {
                return {
                    ...state,
                    user: initialState.user,
                    auth: false,
                    error: action.payload
                }
            }
        default:
            {
                return state;
            }
    }
};

export default LoginReducer;