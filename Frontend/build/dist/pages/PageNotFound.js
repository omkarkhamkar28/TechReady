import React from "react";
import {Link} from "react-router-dom";
import Layout from "../Components/Layout/Layout.js";
const Pagenotfound = () => {
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "go back- page not found"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pnf"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "pnf-title"
  }, "404"), /* @__PURE__ */ React.createElement("h2", {
    className: "pnf-heading"
  }, "Oops ! Page Not Found"), /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "pnf-btn"
  }, "Go Back")));
};
export default Pagenotfound;
