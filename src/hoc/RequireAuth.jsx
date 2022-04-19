import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '_actions/login_actions';
import { useAuth } from './auth.provider';

function RequireAuth({ children }) {
  let authUser = useAuth();
  let location = useLocation();

  const authCheck = async () => {
    // await dispatch(auth()).then((result) => {
    //   console.log("", result)
    // })

    const result = authUser.authCheck((res) => {
      console.log("Callback!!")
      return res
    })

    // return result.success ? true : false;
    return true;
  }

  if (!authCheck()) {


    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth