import axios from "axios";
import localstorageService from "./localstorage.service";

class JwtService {


    /** Login */
    login = (loginSucData) => {
        this.setSession(loginSucData.accessToken, loginSucData.refreshToken)
        this.setUser(loginSucData)
    }

    /** Delete In LocalStorage And Axios Header */
    logout = () => {
        this.setSession(null);
        this.removeUser();
    };

    /** AccessToen & RefreshToken Save In Localstorage And Set to Axios Header */
    setSession = (accessToken, refreshToken) => {
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            axios.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
            axios.defaults.headers.common["refreshToken"] = refreshToken;
        } else {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            delete axios.defaults.headers.common["Authorization"];
            delete axios.defaults.headers.common["refreshToken"];
        }
    };

    setUser = (user) => {
        localstorageService.setItem("auth_user", user);
    };

    removeUser = () => {
        localStorage.removeItem("auth_user");
    };
}

export default new JwtService();