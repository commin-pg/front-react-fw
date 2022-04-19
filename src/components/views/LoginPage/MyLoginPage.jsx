import { Button, Form, Input, PageHeader } from "antd";
import { useAuth } from "hoc/auth.provider";

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, withRouter } from "react-router-dom";
import jwtService from "../../../services/jwt.service";
import { loginUser, LOGIN_SUCCESS } from "../../../_actions/login_actions";
import { setUserData } from "../../../_actions/user_actions";

function MyLoginPage({ history }) {
  /** State */
  const [UserId, setUserId] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  const user = useSelector(state => state.user);


  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || '/';

  const submitLogin = (e) => {
    e.preventDefault();
    auth.signin(UserId, UserPassword, () => {
      navigate(from, { replace: true });
      // window.location.reload(true);
    });
  };

  // const authCheck = async () => {
  //   const result = await auth.authCheck((res) => {
  //     return res.success;
  //   })
  //   console.log("result", result)
  //   // return result ? true : false;
  //   return true;

  // }

  // if (authCheck()) {
  //   return <Navigate to={from} replace />;
  // }


  return (
    <div>

      <PageHeader
        className="site-page-header"
        title="로그인"
      />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onSubmit={submitLogin}
        autoComplete="off"
      >

        {login.error.data ? login.error.data.message : ""}
        <Form.Item
          label="UserId"
          name="user_id"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={e => setUserId(e.currentTarget.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={e => setUserPassword(e.currentTarget.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" onClick={submitLogin}>
            로그인2
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
}

export default MyLoginPage
