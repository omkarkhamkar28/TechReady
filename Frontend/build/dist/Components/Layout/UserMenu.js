import React from "react";
import {NavLink, Link} from "react-router-dom";
import {useAuth} from "../../context/auth.js";
import "../../Styles/UserMenu.css";
import toast from "react-hot-toast";
import {FaUser, FaSignOutAlt, FaUserEdit, FaInfoCircle} from "react-icons/fa";
const UserMenu = () => {
  const [auth, setAuth] = useAuth();
  const userId = auth?.user?._id;
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "sidebar card shadow-lg p-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "profile-section text-center mb-3"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Profile",
    className: "rounded-circle shadow",
    style: {width: "100px", height: "100px", objectFit: "cover"}
  }), /* @__PURE__ */ React.createElement("h4", {
    className: "mt-2",
    style: {textTransform: "capitalize"}
  }, "👋 Hello, ", auth?.user?.name, "!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, auth?.user?.email), /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, "📞 ", auth?.user?.phone), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex justify-content-center gap-2 mt-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "btn btn-success btn-sm",
    to: `/profile/${userId}`
  }, /* @__PURE__ */ React.createElement(FaUser, {
    className: "icon"
  }), " Profile"), /* @__PURE__ */ React.createElement(Link, {
    className: "btn btn-outline-success btn-sm",
    to: `/profile/${userId}/edit`
  }, /* @__PURE__ */ React.createElement(FaUserEdit, {
    className: "icon"
  }), " Edit Profile"))), /* @__PURE__ */ React.createElement("hr", {
    className: "my-3 border-dark"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "btn btn-danger w-100",
    onClick: handleLogout,
    to: `/login`
  }, /* @__PURE__ */ React.createElement(FaSignOutAlt, {
    className: "icon"
  }), " Logout")), /* @__PURE__ */ React.createElement("div", {
    className: "techready-info text-center p-3 rounded shadow-sm"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement(FaInfoCircle, {
    className: "icon"
  }), " About TechReady"), /* @__PURE__ */ React.createElement("p", {
    className: "text-muted small"
  }, "TechReady is an interactive coding platform for students, offering **short notes, mock tests, coding challenges, and certifications.**"), /* @__PURE__ */ React.createElement(Link, {
    to: "/about-techready",
    className: "btn btn-primary btn-sm"
  }, "Learn More")));
};
export default UserMenu;
