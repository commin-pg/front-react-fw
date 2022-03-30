import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/login_actions";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { useFormik } from 'formik';
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

  const state = {
    userId: "",
    password: "",
  }

  // const handleChange = (event) => {
  //   event.persist();
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (values, { isSubmitting }) => {
  //   let dataToSubmit = {
  //     userId: values.email,
  //     password: values.password,
  //   };
  //   this.props.loginUser(dataToSubmit);
  // };

  return (
    <Formik
      initialValues={{
        userId: initialUserId,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { isSubmitting }) => {
        let dataToSubmit = {
          userId: values.email,
          password: values.password,
        };
        this.props.loginUser(dataToSubmit);
      }}
      onChange={(event) => {
        console.log(event)
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
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
          handleReset,
        } = props;
        return (
          <div className="app">
            <Title level={2}>Log In</Title>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Item required>
                <Input
                  id="email"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Enter your email"
                  type="email"
                  name="userId"
                  value={values.email}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
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
                  // onChange={handleChange}
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

const mapStateToProps = (state) => ({
  
  loginUser: PropTypes.func.isRequired,
  user: state.user,
});


// export default withRouter(LoginPage);
export default connect(mapStateToProps, {
  loginUser
})(LoginPage)
