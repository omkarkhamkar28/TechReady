import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const UpdateCourse = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const getSingleCourse = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-single-course/${params.course}`);
      setCourseName(data.course.courseName);
      setDescription(data.course.description);
      setDifficulty(data.course.difficulty);
      setPrice(data.course.price);
      setTopics(data.course.topics || []);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the course");
    }
  };
  useEffect(() => {
    getSingleCourse();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const courseData = {courseName, description, difficulty, topics, price};
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/update-course/${params.course}`, courseData);
      if (data?.success) {
        toast.success("Course Updated Successfully");
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
  const handleTopics = (index, value) => {
    const updateTopic = [...topics];
    updateTopic[index] = value;
    setTopics(updateTopic);
  };
  const handleAddTopic = () => {
    setTopics([...topics, ""]);
  };
  const handleRemoveTopic = (index) => {
    const updatedTopics = topics.filter((_, idx) => idx !== index);
    setTopics(updatedTopics);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Update Course"
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Update Course"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "courseName",
    className: "form-label"
  }, "Course Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: courseName,
    id: "courseName",
    placeholder: "Enter course name",
    className: "form-control",
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
    className: "form-control",
    onChange: (e) => setDescription(e.target.value),
    rows: "3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Topics"), topics.map((topic, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "input-group mb-2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: topic,
    onChange: (e) => handleTopics(index, e.target.value),
    className: "form-control"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-danger",
    onClick: () => handleRemoveTopic(index)
  }, "Remove"))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-success",
    onClick: handleAddTopic
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
    htmlFor: "difficulty",
    className: "form-label"
  }, "Difficulty Level"), /* @__PURE__ */ React.createElement("select", {
    value: difficulty,
    id: "difficulty",
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
  }, loading ? "Updating..." : "Update Course"))))))));
};
export default UpdateCourse;
