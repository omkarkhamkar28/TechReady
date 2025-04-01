import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const AddCourses = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([""]);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const courseData = {
        courseName,
        description,
        difficulty,
        topics,
        price
      };
      const {data} = await axios.post("${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/add-course", courseData);
      if (data?.success) {
        toast.success("Course Created Successfully");
        navigate("/dashboard/admin/courses");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  const addTopic = () => {
    setTopics([...topics, ""]);
  };
  const removeTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
  };
  const handleTopics = (index, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = value;
    setTopics(updatedTopics);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Create Course"
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
  }, "Create Course"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "courseName",
    className: "form-label"
  }, "Course Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: courseName,
    id: "courseName",
    placeholder: "Enter course name",
    className: "form-control shadow-sm",
    onChange: (e) => setCourseName(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "form-label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    value: description,
    id: "description",
    placeholder: "Enter course description",
    className: "form-control shadow-sm",
    onChange: (e) => setDescription(e.target.value),
    rows: "3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Topics:"), topics.map((topic, index) => /* @__PURE__ */ React.createElement("div", {
    className: "input-group mb-2",
    key: index
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: topic,
    placeholder: `Enter topic ${index + 1}`,
    className: "form-control shadow-sm",
    onChange: (e) => handleTopics(index, e.target.value)
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-danger",
    onClick: () => removeTopic(index)
  }, "Remove"))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-success mb-3",
    onClick: addTopic
  }, "Add Topic")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "courseprice",
    className: "form-label"
  }, "Course Price"), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    value: price,
    id: "courseprice",
    placeholder: "Enter course price",
    className: "form-control shadow-sm",
    onChange: (e) => setPrice(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
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
  }, loading ? "Creating..." : "Create Course"))))))));
};
export default AddCourses;
