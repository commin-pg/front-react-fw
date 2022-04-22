import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '_actions/login_actions';
import { useAuth } from './auth.provider';

function RequireAuth({ children }) {
  let authUser = useAuth();
  let location = useLocation();
  const navigate = useNavigate();

  const authCheck = async () => {
    // await dispatch(auth()).then((result) => {
    //   console.log("", result)
    // })

    const result = await authUser.authCheck((res) => {
      console.log("Callback!!")
      return res
    })

    console.log("AuthCheck", result.success)

    if (result.success === false) {
      await authUser.signout(() => navigate('/login'));
    }

    return true;
  }

  if (!authCheck()) {
    console.log("Auth Fail!")

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth