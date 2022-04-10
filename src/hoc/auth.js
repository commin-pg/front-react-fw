/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from '_actions/user_actions';
import jwtService from '../services/jwt.service';
import { auth } from '../_actions/login_actions';

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {

        let login = useSelector(state => state.login);
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();


        useEffect(() => {
            console.log("Auth User ::: ", login)
            let ls = window.localStorage;
            const accessToken = ls.getItem("accessToken");
            const refreshToken = ls.getItem("refreshToken");

            if (accessToken) {
                jwtService.setSession(accessToken, refreshToken)
            }

            dispatch(auth()).then(response => {
                //Not Loggined in Status 
                if (!response.payload.userId) {
                    if (option) {
                        props.history.push('/login')
                    }
                    //Loggined in Status 
                } else {
                    dispatch(setUserData(response.payload))
                    //supposed to be Admin page, but not admin person wants to go inside
                    if (adminRoute && !response.payload.userId) {
                        props.history.push('/')
                    }
                    //Logged in Status, but Try to go into log in page 
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (<
            SpecificComponent {...props}
            user={user}
        />
        )
    }
    return AuthenticationCheck
}