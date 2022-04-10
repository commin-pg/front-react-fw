import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/login_actions";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Icon, Input, Button, Checkbox, Typography } from "antd";
import { connect, useDispatch } from "react-redux";

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialUserId = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        userId: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        userId: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // let dataToSubmit = {
        //   userId: values.userId,
        //   password: values.password,
        // };
        setTimeout(async () => {
          await dispatch(loginUser({ userId: values.userId, password: values.password }));
          // console.log(result)
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)

      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          // <>
          //   <Form>
          //     <input type="email" name="userId" onChange={handleChange} value={values.userId} />
          //     <input type="password" name="password" onChange={handleChange} value={values.password} />
          //   </Form>
          // </>

          <div className="app">
            <Title level={2}>Log In</Title>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="userId"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Enter your email"
                  type="email"
                  name="userId"
                  value={values.userId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.userId && touched.userId
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.userId && touched.userId && (
                  <div className="input-feedback">{errors.userId}</div>
                )}
              </Form.Item>

              <Form.Item required>
                <Input
                  id="password"
                  name="password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              {formErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {formErrorMessage}
                  </p>
                </label>
              )}

              <Form.Item>
                <Checkbox
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                >
                  Remember me
                </Checkbox>
                <a
                  className="login-form-forgot"
                  href="/reset_user"
                  style={{ float: "right" }}
                >
                  forgot password
                </a>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ minWidth: "100%" }}
                    disabled={isSubmitting}
                    onSubmit={handleSubmit}
                  >
                    Log in
                  </Button>
                </div>
                Or <a href="/register">register now!</a>
              </Form.Item>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

// const mapStateToProps = (state) => ({
//   loginUser: PropTypes.func.isRequired,
//   user: state.user,
// });

export default LoginPage;
