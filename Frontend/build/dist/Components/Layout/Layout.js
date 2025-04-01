import React from "react";
import {Helmet} from "react-helmet";
import {Toaster} from "react-hot-toast";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../../Styles/Layout.css";
const Layout = ({children, title, description, keywords, author}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Helmet, null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: description
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "keywords",
    content: keywords
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "author",
    content: author
  }), /* @__PURE__ */ React.createElement("title", null, title)), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "main-content flex-grow-1 p-1 "
  }, /* @__PURE__ */ React.createElement(Toaster, null), children), /* @__PURE__ */ React.createElement(Footer, null));
};
Layout.defaultProps = {
  title: "TechReady - Learn & Code",
  description: "TechReady is an interactive learning platform",
  keywords: "coding, programming, MERN, learning",
  author: "Omkar"
};
export default Layout;
