import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout.js";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/forgot-password`, {
        email,
        answer,
        newPassword
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrvfvong");
    }
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Forgot password - Ecommerce App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-container ",
    style: {minHeight: "90vh"}
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title"
  }, "RESET PASSWORD"), /* @__PURE__ */ React.createElement("div", {
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
    type: "text",
    value: answer,
    onChange: (e) => setAnswer(e.target.value),
    className: "form-control",
    id: "exampleInputAnswer",
    placeholder: "Enter Your Favorite Coding Langugae",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: newPassword,
    onChange: (e) => setNewPassword(e.target.value),
    className: "form-control",
    id: "exampleInputNewPassword1",
    placeholder: "Enter Your New Password",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "RESET"))));
};
export default ForgotPassword;
