import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import Layout from "../Components/Layout/Layout.js";
import {useAuth} from "../context/auth.js";
const CourseDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [auth, setAuth] = useAuth();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const [video, setVideo] = useState([]);
  const [mockTest, setMocktest] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const checkAccess = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/purchase/check-access/${params.course}/${auth?.user?._id}`);
      setHasAccess(data.purchase);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };
  useEffect(() => {
    checkAccess();
  }, []);
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
  useEffect(() => {
    const getCourseNotes = async () => {
      try {
        const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-notes/get-single-courseNotes/${params.course}`);
        setNotes(data.notes);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong in getting the notes");
      }
    };
    getCourseNotes();
  }, []);
  useEffect(() => {
    const getCourseVideo = async () => {
      try {
        const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/get-single-courseVideo/${params.course}`);
        setVideo(data.Video);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong in getting the video");
      }
    };
    getCourseVideo();
  }, []);
  useEffect(() => {
    const getCourseMockTest = async () => {
      try {
        const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-mocktest/get-mocktest/${params.course}`);
        setMocktest(data.questions);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong in getting the mock test");
      }
    };
    getCourseMockTest();
  }, []);
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Course details"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-10 m-auto mb-3 mt-4 card h-100 p-2 shadow-lg border-0 rounded-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title text-primary text-center fw-bold"
  }, courseName), /* @__PURE__ */ React.createElement("p", {
    className: "card-text text-muted text-wrap"
  }, description ? description.split("\n").map((line, index) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: index
  }, line, /* @__PURE__ */ React.createElement("br", null))) : "No description available"), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h6", {
    className: "fw-semibold "
  }, "📚 Topics:"), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap gap-2 justify-content-center"
  }, topics.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap gap-2 mb-2"
  }, topics.map((t, idx) => /* @__PURE__ */ React.createElement("span", {
    key: idx,
    className: "badge bg-secondary p-2 text-light rounded-2",
    style: {fontSize: "14px"}
  }, t))) : /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, "No topics available"))), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex gap-2 justify-content-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "m-3"
  }, "💰 Price: ", /* @__PURE__ */ React.createElement("strong", null, price || "Free")), /* @__PURE__ */ React.createElement("p", {
    className: "m-3"
  }, "🚀 Level: ", /* @__PURE__ */ React.createElement("strong", null, difficulty || "N/A"))), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, !hasAccess ? /* @__PURE__ */ React.createElement(Link, {
    to: `/access-course/${params.course}/${auth?.user?._id}`,
    className: "btn btn-info shadow-sm"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-plus-circle me-1"
  }), " Start Learning") : /* @__PURE__ */ React.createElement(Link, {
    to: `/start-course/${params.course}/${auth?.user?.name}`,
    className: "btn btn-success shadow-sm mt-2"
  }, "Start Learning"))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    colSpan: "2",
    className: "text-center"
  }, "📖 Notes")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Title"))), /* @__PURE__ */ React.createElement("tbody", null, notes.length > 0 ? notes.map((n, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, n.notestitle || "N/A"))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "2"
  }, "No Notes available.")))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    colSpan: "3",
    className: "text-center"
  }, "🎥 Videos")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Title"), /* @__PURE__ */ React.createElement("th", null, "Description"))), /* @__PURE__ */ React.createElement("tbody", null, video.length > 0 ? video.map((v, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, v.title || "N/A"), /* @__PURE__ */ React.createElement("td", null, v.description || "N/A"))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "2"
  }, "No videos available.")))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    colSpan: "2",
    className: "text-center"
  }, "📝 Mock Tests")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Test Name"))), /* @__PURE__ */ React.createElement("tbody", null, mockTest.length > 0 ? mockTest.map((mt, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, mt.testName || "N/A"))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "2"
  }, "No mock tests available."))))))))));
};
export default CourseDetails;
