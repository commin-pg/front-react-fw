import { Button, Form, Input } from "antd";

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
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

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("LOGIN?")
    setTimeout(async () => {
      await dispatch(loginUser({ userId: UserId, password: UserPassword }, history))
    }, 400)
  };
  return (
    <div>

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

export default withRouter(MyLoginPage);
