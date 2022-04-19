import axios from "axios";
import { _authCheck, _login } from "_axios/auth/index.js";
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

export async function auth() {
    const request = await _authCheck();
    return {
        type: AUTH_USER,
        payload: request
    }
}

export async function loginUser(dataToSubmit) {

    const request = await _login(dataToSubmit);

    if (request.accessToken)
        console.log("Login Request", request)
    else {
        console.log("Login Fail", request)
        return {
            type: LOGIN_ERROR,
            payload: request,
        };
    }

    return {
        type: LOGIN_USER,
        payload: request,
    };
}