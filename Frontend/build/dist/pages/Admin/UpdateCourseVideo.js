import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const UpdateCourseVideo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [course, setCourse] = useState("");
  const [courseName, setCourseName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topics, setTopics] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const getSingleCourse = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-single-course/${params.course}`);
      setCourse(data.course.courseName);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the course");
    }
  };
  useEffect(() => {
    getSingleCourse();
  }, []);
  const getSingleVideo = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/get-single-video/${params.video}`);
      setCourseName(data.Video.courseName);
      setTitle(data.Video.title);
      setDescription(data.Video.description);
      setTopics(data.Video.topics);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the video");
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
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
  const handleMainVideoChange = (e) => {
    setVideoUrl(e.target.files[0]);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("courseName", courseName);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("topics", topics);
      if (videoUrl) {
        formData.append("videoUrl", videoUrl);
      }
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/update-single-video/${params.video}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (data?.success) {
        toast.success("video Updated Successfully");
        navigate(`/dashboard/admin/update-course/${params.course}`);
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
    title: "Dashboard - Update course video "
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
  }, /* @__PURE__ */ React.createElement("h1", null, "Update Video"), /* @__PURE__ */ React.createElement("label", null, "Course Name :"), /* @__PURE__ */ React.createElement("input", {
    value: course,
    placeholder: "Enter Notes Title",
    className: "form-control",
    readOnly: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", null, "Video Title"), /* @__PURE__ */ React.createElement("input", {
    value: title,
    placeholder: "Enter Notes Title",
    className: "form-control",
    onChange: (e) => setTitle(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "mainImage",
    className: "form-label"
  }, "Main Image:"), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    id: "mainVideo",
    className: "form-control",
    name: "videoUrl",
    onChange: handleMainVideoChange
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", null, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    value: description,
    placeholder: "Enter Description",
    className: "form-control",
    onChange: (e) => setDescription(e.target.value)
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
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary w-50",
    type: "submit",
    disabled: loading
  }, loading ? "Updating..." : "Update Video"))))))));
};
export default UpdateCourseVideo;
