import React, {Component, StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/auth.js";
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AuthProvider, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(StrictMode, null, /* @__PURE__ */ React.createElement(App, null))))));
