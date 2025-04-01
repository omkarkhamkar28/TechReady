import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import {FaArrowLeft, FaArrowRight, FaCheck} from "react-icons/fa";
import Layout from "../Components/Layout/Layout.js";
const CourseNotes = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courseName, setCourseName] = useState("");
  const [notestitle, setNotestitle] = useState("");
  const [subtitle, setSubtitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [subImages, setSubImages] = useState([]);
  const getSingleNotes = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-notes/get-single-notes/${params.notes}`);
      setCourseName(data.note.courseName);
      setNotestitle(data.note.notestitle);
      setSubtitle(data.note.subtitle);
      setDescription(data.note.description);
      setMainImage(data.note.mainImage);
      setSubImages(data.note.subImages);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the notes");
    }
  };
  useEffect(() => {
    getSingleNotes();
  }, []);
  return /* @__PURE__ */ React.createElement(Layout, {
    title: `Notes - ${courseName}`
  }, /* @__PURE__ */ React.createElement("div", {
    id: "notes-container",
    className: "container-fluid mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "notes-card",
    className: "card shadow-lg p-3 mb-4 bg-white rounded"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "card-header",
    className: "card-header text-center text-white"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-dark"
  }, notestitle), mainImage && /* @__PURE__ */ React.createElement("img", {
    src: `${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/${mainImage}`,
    alt: "Main",
    id: "main-image",
    className: "img-fluid rounded"
  })), subtitle?.map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    id: "subtitle-section",
    className: "p-3"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "subtitle-title",
    id: "subtitle-title"
  }, item), /* @__PURE__ */ React.createElement("p", {
    className: "subtitle-description text-justify"
  }, description[index] || "Description not available"), subImages[index]?.imageUrl && /* @__PURE__ */ React.createElement("img", {
    src: `${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/${subImages[index].imageUrl}`,
    alt: `Sub ${index + 1}`,
    className: "img-fluid rounded mb-3",
    id: "subtitle-image"
  }))))));
};
export default CourseNotes;
