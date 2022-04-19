import axiosInstance from "services/axios.service";
import jwtService from "services/jwt.service";

export const _authCheck = async () => {
    var endpoint = `/auth/auth`;
    return axiosInstance
        .post(endpoint)
        .then((result) => {
            result.data.success = true;
            return result.data;
        }).catch(e => {
            console.log("AUTH REDUX ERR :::::", e.response.data)
            return {
                exp: undefined,
                iat: undefined,
                id: undefined,
                userId: null,
                username: null,
                success: false
            }
        })
}

export const _login = async (dataToSubmit) => {
    var endpoint = `/auth/login`;
    return axiosInstance
        .post(endpoint, dataToSubmit)
        .then((response) => response.data)
        .then((result) => {
            jwtService.login(result.data);
            return result.data
        })
        .catch(e => {
            console.log("AUTH REDUX ERR :::::", e.response.data)
            return e.response.data;
        })
}
