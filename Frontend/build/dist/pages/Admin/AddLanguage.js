import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const AddLanguage = () => {
  const navigate = useNavigate();
  const [languageName, setLanguageName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const languageData = {languageName, description};
      const {data} = await axios.post("${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/add-language", languageData);
      if (data?.success) {
        toast.success("Language Created Successfully");
        navigate("/dashboard/admin/language");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Create Language"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-md-3 mb-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-9 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "admin-form-container"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleCreate
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center mb-4"
  }, "Create Language"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "languageName",
    className: "form-label"
  }, "Language Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "languageName",
    placeholder: "Enter language name",
    value: languageName,
    onChange: (e) => setLanguageName(e.target.value),
    className: "form-control"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "form-label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    placeholder: "Enter language description",
    rows: "4",
    value: description,
    onChange: (e) => setDescription(e.target.value),
    className: "form-control"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    id: "submit-btn",
    className: "btn btn-primary w-50",
    type: "submit",
    disabled: loading
  }, loading ? /* @__PURE__ */ React.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }) : "Create Language"))))))));
};
export default AddLanguage;
