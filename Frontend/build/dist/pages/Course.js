import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useEffect, useState} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {useAuth} from "../context/auth.js";
import Layout from "../Components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
const Course = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [auth, setAuth] = useAuth();
  const course = params.course;
  const name = params.name;
  const [Name, setName] = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const checkAccess = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/purchase/check-access/${course}/${name}`);
      setHasAccess(data.purchase);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };
  useEffect(() => {
    checkAccess();
  }, []);
  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/purchase/purchase-course/${course}/${name}`, {
        course,
        name
      });
      if (data?.success) {
        toast.success("Course purchase Successfully");
        navigate(`/start-course/${course}/${auth?.user?._id}`);
        checkAccess();
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    const getSingleCourse = async () => {
      try {
        const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-single-course/${params.course}`);
        setCourseName(data.course.courseName);
        setDescription(data.course.description);
        setDifficulty(data.course.difficulty);
        setPrice(data.course.price);
        setTopics(data.course.topics || []);
        setId(data.course._id);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong in getting the course");
      }
    };
    getSingleCourse();
  }, []);
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Learn Course"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, !hasAccess ? /* @__PURE__ */ React.createElement("div", {
    className: "container mt-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4"
  }, "Purchase Course"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handlePurchase,
    className: "p-4 border rounded"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Course Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    value: courseName,
    onChange: (e) => setCourseName(e.target.value),
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    value: auth?.user?.name,
    onChange: (e) => setName(e.target.value),
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary w-100"
  }, "Pay & Purchase"))) : navigate(`/start-course/${course}/${auth?.user?.name}`)));
};
export default Course;
