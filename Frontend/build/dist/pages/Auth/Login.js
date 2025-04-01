import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import "../../Styles/AuthStyles.css";
import {useAuth} from "../../context/auth.js";
import Layout from "../../Components/Layout/Layout.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/login`, {
        email,
        password
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Login - Ecommerce App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-container ",
    style: {minHeight: "90vh"}
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title"
  }, "LOGIN FORM"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "email",
    autoFocus: true,
    value: email,
    onChange: (e) => setEmail(e.target.value),
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter Your Email ",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: password,
    onChange: (e) => setPassword(e.target.value),
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Enter Your Password",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn forgot-btn",
    onClick: () => {
      navigate("/forgot-password");
    }
  }, "Forgot Password")), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "LOGIN"))));
};
export default Login;
