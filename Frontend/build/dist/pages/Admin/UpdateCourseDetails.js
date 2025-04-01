import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
const UpdateCourseDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [notes, setNotes] = useState([]);
  const [video, setVideo] = useState([]);
  const [mockTest, setMocktest] = useState([]);
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    getSingleCourse();
  }, []);
  const getCourseNotes = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-notes/get-single-courseNotes/${params.course}`);
      setNotes(data.notes);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the notes");
    }
  };
  useEffect(() => {
    getCourseNotes();
  }, []);
  const getCourseVideo = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/get-single-courseVideo/${params.course}`);
      setVideo(data.Video);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the video");
    }
  };
  useEffect(() => {
    getCourseVideo();
  }, []);
  const getCourseMockTest = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-mocktest/get-mocktest/${params.course}`);
      setMocktest(data.questions);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the mock test");
    }
  };
  useEffect(() => {
    getCourseMockTest();
  }, []);
  const handleDeleteNotes = async (id2) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-notes/delete-single-notes/${id2}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("Notes deleted successfully!");
            getCourseNotes();
          } else {
            toast.error(response.data.message || "Failed to delete note.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete note.";
          toast.error(errorMessage);
        }
      },
      className: "btn btn-danger btn-sm m-1"
    }, "Yes"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => toast.dismiss(t.id),
      className: "btn btn-secondary btn-sm m-1"
    }, "No")));
  };
  const handleDeleteVideo = async (id2) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-video/delete-courseVideo/${id2}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("video deleted successfully!");
            getCourseVideo();
          } else {
            toast.error(response.data.message || "Failed to delete note.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete note.";
          toast.error(errorMessage);
        }
      },
      className: "btn btn-danger btn-sm m-1"
    }, "Yes"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => toast.dismiss(t.id),
      className: "btn btn-secondary btn-sm m-1"
    }, "No")));
  };
  const handleDeleteMockTest = async (id2) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-mocktest/delete-mocktest/${id2}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("Mock test deleted successfully!");
            getCourseMockTest();
          } else {
            toast.error(response.data.message || "Failed to delete mock test.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete mock test.";
          toast.error(errorMessage);
        }
      },
      className: "btn btn-danger btn-sm m-1"
    }, "Yes"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => toast.dismiss(t.id),
      className: "btn btn-secondary btn-sm m-1"
    }, "No")));
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
    className: "col-lg-8 col-md-9 mb-3 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card h-100 shadow-lg border-0 rounded-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title text-primary fw-bold"
  }, courseName), /* @__PURE__ */ React.createElement("p", {
    className: "card-text text-muted text-wrap"
  }, description ? description.split("\n").map((line, index) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: index
  }, line, /* @__PURE__ */ React.createElement("br", null))) : "No description available"), /* @__PURE__ */ React.createElement("h6", {
    className: "fw-semibold"
  }, "📚 Topics:"), Array.isArray(topics) && topics.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap gap-2 mb-2"
  }, topics?.map((t, idx) => /* @__PURE__ */ React.createElement("span", {
    key: idx,
    className: "badge bg-secondary p-2 text-light rounded-2",
    style: {fontSize: "14px"}
  }, t))) : /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, "No topics available"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-1"
  }, "💰 Price: ", /* @__PURE__ */ React.createElement("strong", null, price || "Free")), /* @__PURE__ */ React.createElement("p", {
    className: "mb-3"
  }, "🚀 Level: ", /* @__PURE__ */ React.createElement("strong", null, difficulty || "N/A")), /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-courseName/${params.course}`,
    className: "btn btn-outline-primary btn-sm"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit")))), /* @__PURE__ */ React.createElement("div", {
    className: " col-12 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " col-sm-10 mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/add-courseNotes/${params.course}`,
    className: "btn btn-sm btn-success mb-2"
  }, "Add Notes"), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "row-light",
    colSpan: "4"
  }, "Notes ")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Notes Title"), /* @__PURE__ */ React.createElement("th", null, "Sub titles"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, notes?.length > 0 ? notes.map((n, index) => /* @__PURE__ */ React.createElement("tr", {
    key: n.id || index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, n.notestitle || "N/A"), /* @__PURE__ */ React.createElement("td", null, n.subtitle && Array.isArray(n.subtitle) ? n.subtitle.map((sub, idx) => /* @__PURE__ */ React.createElement("div", {
    key: idx,
    style: {
      padding: "5px",
      margin: "2px 0",
      backgroundColor: "#f8f9fa",
      borderRadius: "5px",
      border: "1px solid #ddd"
    }
  }, sub)) : /* @__PURE__ */ React.createElement("div", {
    style: {
      padding: "5px",
      backgroundColor: "#f8f9fa",
      borderRadius: "5px",
      border: "1px solid #ddd"
    }
  }, n.subtitle || "N/A")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-courseNotes/${params.course}/${n._id}`,
    className: "btn btn-sm btn-success mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDeleteNotes(n._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "4"
  }, "No Notes available.")))))), /* @__PURE__ */ React.createElement("div", {
    className: " col-sm-10 mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/add-courseVideo/${id}`,
    className: "btn btn-sm btn-success mb-2"
  }, "Add Video"), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "row-light",
    colSpan: "5"
  }, "Video ")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "title"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Topics"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, video?.length > 0 ? video.map((v, index) => /* @__PURE__ */ React.createElement("tr", {
    key: v.id || index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, v.title || "N/A"), /* @__PURE__ */ React.createElement("td", null, v.description || "N/A"), /* @__PURE__ */ React.createElement("td", null, v.topics && Array.isArray(v.topics) ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap gap-2"
  }, v.topics.map((t, idx) => /* @__PURE__ */ React.createElement("span", {
    key: idx,
    className: `badge btn btn-secondary p-2 rounded text-light"
                                                                        }`,
    style: {fontSize: "14px", minWidth: "100px"}
  }, t))) : /* @__PURE__ */ React.createElement("div", {
    className: "text-muted"
  }, "No topics")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-courseVideo/${params.course}/${v._id}`,
    className: "btn btn-sm btn-success mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDeleteVideo(v._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "5"
  }, "No video available.")))))), /* @__PURE__ */ React.createElement("div", {
    className: " col-sm-10 mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/add-courseMocktest/${id}`,
    className: "btn btn-sm btn-success mb-2"
  }, "Add Mocktest"), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "row-light",
    colSpan: "7"
  }, "Mock Test ")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Mock Test Name"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, mockTest?.length > 0 ? mockTest.map((mt, index) => /* @__PURE__ */ React.createElement("tr", {
    key: mt.id || index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, mt.testName || "N/A"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-courseMocktest/${params.course}/${mt._id}`,
    className: "btn btn-sm btn-success mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDeleteMockTest(mt._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "5"
  }, "No video available.")))))))))));
};
export default UpdateCourseDetails;
