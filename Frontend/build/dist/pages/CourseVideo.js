import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Layout from "../Components/Layout/Layout.js";
import "../Styles/CourseVideo.css";
const CourseVideo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courseName, setCourseName] = useState("");
  const [videotitle, setVideotitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [topics, setTopics] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const getSingleVideo = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/get-single-video/${params.video}`);
      if (data.Video) {
        setCourseName(data.Video.courseName);
        setVideotitle(data.Video.title);
        setVideoUrl(data.Video.videoUrl);
        setTopics(data.Video.topics);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while getting the video");
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  const fullVideoUrl = videoUrl ? `${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/${videoUrl}` : "";
  return /* @__PURE__ */ React.createElement(Layout, {
    title: `Video - ${courseName}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "course-video-container"
  }, fullVideoUrl ? /* @__PURE__ */ React.createElement("div", {
    className: "video-wrapper",
    onMouseEnter: () => setShowTitle(true),
    onMouseLeave: () => setShowTitle(false),
    onClick: () => setShowTitle(!showTitle)
  }, showTitle && /* @__PURE__ */ React.createElement("h2", {
    className: "video-overlay-title"
  }, videotitle), /* @__PURE__ */ React.createElement("video", {
    controls: true,
    disablePictureInPicture: true,
    controlsList: "nodownload",
    className: "video-player"
  }, /* @__PURE__ */ React.createElement("source", {
    src: fullVideoUrl,
    type: "video/mp4"
  }), "Your browser does not support the video tag.")) : /* @__PURE__ */ React.createElement("p", {
    className: "text-danger text-center"
  }, "Video Not Found")), /* @__PURE__ */ React.createElement("div", {
    className: "topics-container"
  }, /* @__PURE__ */ React.createElement("h3", null, "Topics : "), /* @__PURE__ */ React.createElement("ul", null, topics.length > 0 ? topics.map((topic, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, topic)) : /* @__PURE__ */ React.createElement("p", null, "No topics available."))));
};
export default CourseVideo;
