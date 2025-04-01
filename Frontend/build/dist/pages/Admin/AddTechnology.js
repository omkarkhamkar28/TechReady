import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const AddTechnology = () => {
  const navigate = useNavigate();
  const [technologyName, setTechnologyName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([""]);
  const [loading, setLoading] = useState(false);
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const technologyData = {
        technologyName,
        description,
        difficulty,
        topics
      };
      const {data} = await axios.post("${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/technology/add-technology", technologyData);
      if (data?.success) {
        toast.success("Technology Created Successfully");
        navigate("/dashboard/admin/technology");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  const handleTopics = (index, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = value;
    setTopics(updatedTopics);
  };
  const addTopicField = () => {
    setTopics([...topics, ""]);
  };
  const removeTopicField = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Create Technology"
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Create Technology"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Technology Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: technologyName,
    className: "form-control",
    onChange: (e) => setTechnologyName(e.target.value),
    placeholder: "Enter technology name"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    value: description,
    className: "form-control",
    onChange: (e) => setDescription(e.target.value),
    placeholder: "Enter technology description",
    rows: "3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", null, "Topics:"), topics.map((topic, index) => /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-2",
    key: index
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: topic,
    placeholder: `Enter topic ${index + 1}`,
    className: "form-control",
    onChange: (e) => handleTopics(index, e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-danger",
    onClick: () => removeTopicField(index)
  }, "Remove"))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-success mb-3",
    onClick: addTopicField
  }, "Add Topic")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Difficulty Level"), /* @__PURE__ */ React.createElement("select", {
    value: difficulty,
    className: "form-select",
    onChange: (e) => setDifficulty(e.target.value)
  }, /* @__PURE__ */ React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose Difficulty Level"), /* @__PURE__ */ React.createElement("option", {
    value: "Beginner"
  }, "Beginner"), /* @__PURE__ */ React.createElement("option", {
    value: "Intermediate"
  }, "Intermediate"), /* @__PURE__ */ React.createElement("option", {
    value: "Advanced"
  }, "Advanced"))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary w-50",
    type: "submit",
    disabled: loading
  }, loading ? "Creating..." : "Create Technology"))))))));
};
export default AddTechnology;
