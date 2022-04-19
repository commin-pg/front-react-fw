import axios from 'axios'
import { BASE_SERVER_URL } from '../components/Config'
import jwtService from './jwt.service';

const ls = window.localStorage;

const axiosInstance = axios.create({
    baseURL: BASE_SERVER_URL,
    headers: {
        Accept: 'application/json',
        useQueryString: 'true',
    },
})

axiosInstance.interceptors.request.use(
    function (config) {
        if (ls.getItem("accessToken"))
            config.headers.Authorization = 'Bearer ' + ls.getItem("accessToken")
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosInstance;