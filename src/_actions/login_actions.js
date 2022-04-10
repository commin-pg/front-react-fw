import axios from "axios";
import { USER_SERVER } from "../components/Config.js";
import jwtService from "../services/jwt.service.js";
import { setUserData } from "./user_actions.js";

export const LOGIN_USER = "login_user";
export const REGISTER_USER = "register_user";
export const AUTH_USER = "auth_user";
export const LOGOUT_USER = "logout_user";

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";

export function registerUser(dataToSubmit) {
    const request = axios
        .post(`${USER_SERVER}/join`, dataToSubmit)
        .then((response) => response.data)
        .then((result) => result.data);

    return {
        type: REGISTER_USER,
        payload: request,
    };
}

export function auth() {

    const request = axios.post(`${USER_SERVER}/auth`)
        .then((response) => response.data)
        .then((result) => {
            console.log("AUTH REDUX :::::", result.data)
            // dispatch(setUserData(result.data));
            return result.data;
        }).catch(e => {
            console.log("AUTH REDUX :::::", e.response)
            return e.response;
        })


    return {
        type: AUTH_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit, history) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
        });
        axios
            .post(`${USER_SERVER}/login`, dataToSubmit)
            .then((response) => response.data)
            .then((user) => {
                jwtService.login(user.data);
                dispatch(setUserData(user.data));

                console.log("SAVE", user.data)
                history.push({
                    pathname: "/",
                });
                return dispatch({
                    type: LOGIN_SUCCESS,
                });
            })
            .catch((error) => {
                console.log(error);
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: error.response,
                });
            });
    };
}