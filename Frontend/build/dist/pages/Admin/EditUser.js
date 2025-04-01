import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import axios from "axios";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import {FaPlus} from "react-icons/fa";
const EditUser = () => {
  const [user, setUser] = useState({});
  const {id} = useParams();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const getUser = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/viewuser/${id}`);
      setUser(data.user);
      setName(data.user.name);
      setPhone(data.user.phone);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while fetching user data");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password && password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/edituser/${id}`, {
        name,
        phone,
        password
      });
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "User Dashboard - Edit Profile"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-9 ps-3 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card p-4 shadow-lg rounded m-3"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title mb-4"
  }, "Edit User Profile"), /* @__PURE__ */ React.createElement("div", {
    className: "text-center position-relative mb-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Profile",
    className: "rounded-circle shadow",
    style: {width: "150px", height: "150px", objectFit: "cover"}
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary position-absolute",
    style: {bottom: "0", right: "35%", borderRadius: "50%"}
  }, /* @__PURE__ */ React.createElement(FaPlus, null))), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("label", null, "User Name:"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: name,
    onChange: (e) => setName(e.target.value),
    className: "form-control",
    placeholder: "Enter User Name",
    required: true
  })), /* @__PURE__ */ React.createElement("label", null, "User Phone:"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: phone,
    onChange: (e) => setPhone(e.target.value),
    className: "form-control",
    placeholder: "Enter Phone Number",
    required: true
  })), /* @__PURE__ */ React.createElement("label", null, "New Password:"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: password,
    onChange: (e) => setPassword(e.target.value),
    className: "form-control",
    placeholder: "Enter New Password (min 6 characters)"
  })), /* @__PURE__ */ React.createElement("label", null, "Confirm Password:"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: confirmPassword,
    onChange: (e) => setConfirmPassword(e.target.value),
    className: "form-control",
    placeholder: "Confirm Your Password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Update Profile")))))));
};
export default EditUser;
