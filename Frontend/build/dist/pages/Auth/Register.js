import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";
import toast from "react-hot-toast";
import "../../Styles/AuthStyles.css";
import Layout from "../../Components/Layout/Layout.js";
import {useAuth} from "../../context/auth.js";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form:", {name, email, password, phone, answer});
    try {
      const res = await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/register`, {
        name,
        email,
        password,
        phone,
        answer
      });
      console.log("Server Response:", res.data);
      if (res && res.data.success) {
        toast.success(res.data.message);
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
      console.error("Error in Registration:", error);
      toast.error("Something went wrong");
    }
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Register - TechReady App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-container",
    style: {minHeight: "90vh"}
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title"
  }, "REGISTER FORM"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: name,
    onChange: (e) => setName(e.target.value),
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter Your Name",
    required: true,
    autoFocus: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "email",
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
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: phone,
    onChange: (e) => setPhone(e.target.value),
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter Your Phone",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: answer,
    onChange: (e) => setAnswer(e.target.value),
    className: "form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter Your Favorite Coding Langugae",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "REGISTER"))));
};
export default Register;
