import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import axios from "axios";
import {useParams, Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import "../../Styles/ViewUser.css";
const EditUser = () => {
  const [user, setUser] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const {id} = useParams();
  const getuser = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/viewuser/${id}`);
      setUser(data.user);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while fetching user data");
    }
  };
  useEffect(() => {
    getuser();
  }, []);
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "User Dashboard - Your Profile"
  }, /* @__PURE__ */ React.createElement(Toaster, {
    position: "top-right",
    reverseOrder: false
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-9 ps-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card p-4 shadow-lg rounded profile-card m-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "profile-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "profile-image-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: profileImage || "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Profile",
    className: "profile-image"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "profile-details"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "profile-name"
  }, user?.name), /* @__PURE__ */ React.createElement("p", {
    className: "profile-email"
  }, user?.email), /* @__PURE__ */ React.createElement("p", {
    className: "profile-phone"
  }, user?.phone))), /* @__PURE__ */ React.createElement("div", {
    className: "profile-actions"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/users/edit/${user._id}`
  }, /* @__PURE__ */ React.createElement("button", {
    className: "follow-btn"
  }, "Edit Profile"))))))));
};
export default EditUser;
