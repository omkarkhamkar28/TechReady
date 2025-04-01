import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const UpdateLanguage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [languageName, setLanguageName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const getSinglesetLanguage = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/get-single-language/${params.lang}`);
      setLanguageName(data.language.languageName);
      setDescription(data.language.description);
    } catch (error) {
      console.error(error);
      toast.error(`Error fetching language: ${error.response?.data?.message || error.message}`);
    }
  };
  useEffect(() => {
    getSinglesetLanguage();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const languageData = {languageName, description};
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/update-language/${params.lang}`, languageData);
      if (data?.success) {
        toast.success("Language updated successfully");
        navigate("/dashboard/admin/language");
      } else {
        toast.error(data?.message || "Failed to update language");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Update failed: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Update Language"
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
    onSubmit: handleUpdate
  }, /* @__PURE__ */ React.createElement("h1", null, "Update Language"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "languageName",
    id: "language-name-label"
  }, "Language Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "languageName",
    value: languageName,
    placeholder: "Enter language name",
    className: "form-control",
    onChange: (e) => setLanguageName(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    id: "description-label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    value: description,
    placeholder: "Enter language description",
    rows: "4",
    className: "form-control",
    onChange: (e) => setDescription(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    id: "submit-btn",
    className: "btn btn-primary w-50",
    type: "submit",
    disabled: loading
  }, loading ? /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    className: "spinner-border spinner-border-sm me-2"
  }), "Updating...") : "Update Language"))))))));
};
export default UpdateLanguage;
