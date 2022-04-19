import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import localstorageService from 'services/localstorage.service';
import { auth, loginUser } from '_actions/login_actions';
import { logoutUser } from '_actions/user_actions';

let AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        const auth_user = localstorageService.getItem("auth_user");
        setUser(auth_user?.userData);
    }, [])


    let signin = async (userId, password, callback) => {
        return await dispatch(loginUser({ userId, password })).then((result) => {
            console.log(result)
            setUser(result.payload.userData);
            callback();
        });
    };

    let signout = async (callback) => {
        await dispatch(logoutUser());
        setTimeout(() => {
            setUser(null);
            callback();
        }, 100)
    };

    let authCheck = async (callback) => {
        return await dispatch(auth()).then((result) => {
            console.log(result);
            return result.payload;
        })
    }

    let value = { user, signin, signout, authCheck };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}