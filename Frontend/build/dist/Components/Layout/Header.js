import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import "../../Styles/Header.css";
import LeftSideBar from "./LeftSideBar.js";
import {Link, NavLink} from "react-router-dom";
import {useAuth} from "../../context/auth.js";
import toast from "react-hot-toast";
import axios from "axios";
import UserMenu from "./UserMenu.js";
import {FaUser, FaSignOutAlt, FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus, FaUserShield} from "react-icons/fa";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [courses, setCourses] = useState([]);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const getAllCourses = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-courses`);
      if (data?.success && Array.isArray(data?.courses)) {
        setCourses(data.courses);
      } else {
        setCourses([]);
        toast.error("No courses found.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting courses");
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-expand-lg bg-white shadow-sm fixed-top px-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn d-lg-none",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasLeft",
    "aria-controls": "offcanvasLeft"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: "nav-link active text-primary"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    alt: "TechReady",
    className: "navbar-brand",
    style: {width: "150px"},
    to: "/"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarContent"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "collapse navbar-collapse justify-content-end",
    id: "navbarContent"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "navbar-nav"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: "/"
  }, /* @__PURE__ */ React.createElement(FaHome, {
    className: "icon"
  }), "Home")), !auth?.user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: "/about"
  }, /* @__PURE__ */ React.createElement(FaInfoCircle, {
    className: "icon"
  }), "About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: "/contact"
  }, /* @__PURE__ */ React.createElement(FaEnvelope, {
    className: "icon"
  }), "Contact")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/register",
    className: "nav-link"
  }, " ", /* @__PURE__ */ React.createElement(FaUserPlus, {
    className: "icon"
  }), "Register")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/login",
    className: "btn btn-login text-white"
  }, /* @__PURE__ */ React.createElement(FaSignInAlt, {
    className: "icon"
  }), " Login "))) : auth?.user?.role === 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: `/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`
  }, /* @__PURE__ */ React.createElement(FaUserShield, {
    className: "icon"
  }), " Admin Dashboard")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    onClick: handleLogout,
    to: "/login",
    className: "nav-link"
  }, /* @__PURE__ */ React.createElement(FaSignOutAlt, {
    className: "icon"
  }), " Logout"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: "/about"
  }, /* @__PURE__ */ React.createElement(FaInfoCircle, {
    className: "icon"
  }), "About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    to: "/contact"
  }, /* @__PURE__ */ React.createElement(FaEnvelope, {
    className: "icon"
  }), " Contact")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "nav-link",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#userSidebarSmall",
    "aria-controls": "userSidebarSmall"
  }, /* @__PURE__ */ React.createElement(FaUser, {
    className: "icon"
  }), auth?.user?.name))))))), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-lg offcanvas-start d-lg-block sidebar-lg bg-light shadow-sm",
    "data-bs-scroll": "true",
    tabIndex: "-1",
    id: "offcanvasLeft",
    "aria-labelledby": "offcanvasLeftLabel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-header"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "offcanvas-title",
    id: "offcanvasLeftLabel"
  }, "Menu")), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-body"
  }, /* @__PURE__ */ React.createElement(LeftSideBar, null))), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas offcanvas-end  bg-light shadow-sm",
    "data-bs-scroll": "true",
    tabIndex: "-1",
    id: "userSidebarSmall",
    "aria-labelledby": "userSidebarSmallLabel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-header"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "offcanvas-title",
    id: "userSidebarSmallLabel"
  }, "User Menu "), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn-close text-reset",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-body"
  }, /* @__PURE__ */ React.createElement(UserMenu, null))));
};
export default Header;
