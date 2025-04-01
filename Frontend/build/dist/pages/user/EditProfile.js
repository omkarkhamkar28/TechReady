import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import Layout from "../../Components/Layout/Layout.js";
import axios from "axios";
import {useParams} from "react-router-dom";
import UserMenu from "../../Components/Layout/UserMenu.js";
import toast from "react-hot-toast";
import {FaPlus} from "react-icons/fa";
const EditProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while fetching user data");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getUser();
    } else {
      toast.error("User ID not found");
    }
  }, [id]);
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
      getUser();
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
    className: "col-10 m-auto mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card p-4 shadow-lg rounded border-0",
    style: {backgroundColor: "#f4f7fa"}
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "title mb-4 text-center text-primary"
  }, "Edit User Profile"), loading ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex justify-content-center align-items-center",
    style: {height: "200px"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "spinner-border text-primary",
    role: "status"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Loading..."))) : /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    className: "p-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center position-relative mb-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Profile",
    className: "rounded-circle shadow",
    style: {width: "150px", height: "150px", objectFit: "cover"}
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary position-absolute",
    style: {bottom: "0", right: "35%", borderRadius: "50%"}
  }, /* @__PURE__ */ React.createElement(FaPlus, null))), /* @__PURE__ */ React.createElement("div", {
    className: "form-group mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "User Name:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: name,
    onChange: (e) => setName(e.target.value),
    className: "form-control rounded-pill shadow-sm",
    placeholder: "Enter User Name",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "User Phone:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: phone,
    onChange: (e) => setPhone(e.target.value),
    className: "form-control rounded-pill shadow-sm",
    placeholder: "Enter Phone Number",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "New Password:"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: password,
    onChange: (e) => setPassword(e.target.value),
    className: "form-control rounded-pill shadow-sm",
    placeholder: "Enter New Password (min 6 characters)"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Confirm Password:"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    value: confirmPassword,
    onChange: (e) => setConfirmPassword(e.target.value),
    className: "form-control rounded-pill shadow-sm",
    placeholder: "Confirm Your Password"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary rounded-pill px-4 py-2 shadow-sm",
    style: {fontWeight: "bold"}
  }, "Update Profile")))))));
};
export default EditProfile;
