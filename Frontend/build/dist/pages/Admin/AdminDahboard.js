import React from "react";
import {useAuth} from "../../context/auth.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import Layout from "../../Components/Layout/Layout.js";
import "../../Styles/AdminDashboard.css";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Admin DashBoard - Ecommerce App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-md-3 mb-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-9 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "card profile-card p-4 shadow-lg text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "profile-image mb-3"
  }, /* @__PURE__ */ React.createElement("img", {
    src: auth?.user?.photo || "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Admin Avatar",
    id: "admin-photo",
    class: "rounded-circle"
  })), /* @__PURE__ */ React.createElement("h3", {
    class: "admin-name"
  }, "Admin Name: ", auth?.user?.name), /* @__PURE__ */ React.createElement("h4", {
    class: "admin-email"
  }, "Admin Email: ", auth?.user?.email), /* @__PURE__ */ React.createElement("h4", {
    class: "admin-phone"
  }, "Admin Contact: ", auth?.user?.phone))))));
};
export default AdminDashboard;
