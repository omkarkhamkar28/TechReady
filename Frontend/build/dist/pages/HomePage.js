import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import Layout from "../Components/Layout/Layout.js";
import "../Styles/HomePageStyle.css";
import {useAuth} from "../context/auth.js";
import toast from "react-hot-toast";
import {Link, NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import IntroLoader from "../Components/IntroLoader.js";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const CourseAccessButton = ({c, auth: auth2}) => {
    const [hasAccess, setHasAccess] = useState(false);
    useEffect(() => {
      const checkAccess = async () => {
        try {
          const res = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/purchase/check-access/${c._id}/${auth2?.user?._id}`);
          setHasAccess(res.data.purchase);
        } catch (err) {
          console.error("Error:", err);
        }
      };
      checkAccess();
    }, [c._id, auth2?.user?._id]);
    return hasAccess ? /* @__PURE__ */ React.createElement(Link, {
      to: `/start-course/${c._id}/${auth2?.user?.name}`,
      className: "btn btn-success"
    }, "Start Learning") : /* @__PURE__ */ React.createElement(Link, {
      to: `/access-course/${c._id}/${auth2?.user?._id}`,
      className: "btn btn-outline-info"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "bi bi-plus-circle"
    }), " Start Learning");
  };
  const getCourses = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-courses`);
      setCourses(data.courses);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the courses");
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, showLoader ? /* @__PURE__ */ React.createElement(IntroLoader, null) : /* @__PURE__ */ React.createElement(Layout, {
    title: "Home Page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "homepage"
  }, !auth?.user && /* @__PURE__ */ React.createElement("div", {
    className: "position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center",
    style: {background: "rgba(255, 255, 255, 0.2)", blur: "10px", zIndex: "100000"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card p-4 text-center shadow-lg",
    style: {zIndex: "10000"}
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-4 title"
  }, "Welcome to TechReady"), /* @__PURE__ */ React.createElement("img", {
    src: "/images/logo.png",
    alt: "TechReady",
    className: "mb-3 mx-auto d-block",
    style: {width: "120px"}
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, "Please login or register to continue"), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column gap-3"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => navigate("/login")
  }, "Login"), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-primary",
    onClick: () => navigate("/register")
  }, "Register")))), /* @__PURE__ */ React.createElement("div", {
    className: "IntroHomePage"
  }, /* @__PURE__ */ React.createElement("h4", null, "Hello, ", auth?.user?.name, "!"), /* @__PURE__ */ React.createElement("h6", null, "Welcome to TechReady"), /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "heading"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "p-auto ms-5 text-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "T", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "e", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    alt: "CSS"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "c", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "h", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "R", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "e", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    alt: "Git"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "a", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "d", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    alt: "MongoDB"
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "hover-area"
  }, "y", /* @__PURE__ */ React.createElement("div", {
    className: "hover-box"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/Java_logo.svg",
    alt: "Java"
  }))))))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", {
    className: "container mt-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-center fw-bold text-white rounded-3 shadow-lg p-3",
    style: {
      background: "linear-gradient(45deg, rgb(84, 190, 219), rgb(103, 150, 153), rgb(147, 203, 229))"
    }
  }, "Our Courses"), /* @__PURE__ */ React.createElement("div", {
    id: "courseCarousel",
    className: "carousel slide mt-4",
    "data-bs-ride": "carousel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "carousel-indicators"
  }, courses.map((_, index) => /* @__PURE__ */ React.createElement("button", {
    key: index,
    type: "button",
    "data-bs-target": "#courseCarousel",
    "data-bs-slide-to": index,
    className: `custom-indicator ${index === 0 ? "active" : ""}`,
    "aria-label": `Slide ${index + 1}`
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-inner"
  }, courses.map((c, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: `carousel-item ${index === 0 ? "active" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "d-flex justify-content-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card shadow-lg border-0 col-11 col-lg-8 rounded-3 overflow-hidden mb-3 card-deco",
    style: {
      background: "linear-gradient(45deg, rgb(84, 190, 219), rgb(150, 181, 196), rgb(147, 203, 229))",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body text-center "
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title fw-bold text-primary"
  }, c.courseName), /* @__PURE__ */ React.createElement("img", {
    src: "./images/course.png",
    className: "card-img-top img-fluid rounded-top",
    alt: c.courseName,
    style: {
      height: "200px",
      width: " 400px",
      objectFit: "cover",
      filter: "brightness(0.9)"
    }
  }), /* @__PURE__ */ React.createElement("p", {
    className: "card-text text-muted text-wrap"
  }, c.description ? c.description.split("\n").map((line, index2) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: index2
  }, line, /* @__PURE__ */ React.createElement("br", null))) : "No description available"), /* @__PURE__ */ React.createElement("p", {
    className: "text-muted"
  }, /* @__PURE__ */ React.createElement("strong", null, "Topics:")), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap gap-2 justify-content-center"
  }, c.topics?.length > 0 ? c.topics.map((topic, idx) => /* @__PURE__ */ React.createElement("span", {
    key: idx,
    className: "badge text-dark shadow-sm p-2",
    style: {
      fontSize: "0.85rem",
      borderRadius: "12px",
      background: "linear-gradient(45deg, rgb(84, 190, 219), rgb(150, 181, 196), rgb(147, 203, 229))"
    }
  }, topic)) : /* @__PURE__ */ React.createElement("span", {
    className: "badge bg-secondary text-white p-2"
  }, "No topics available")), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex justify-content-center gap-2 mt-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/get-course/${c._id}`,
    className: "btn btn-info text-white shadow-sm"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-info-circle me-1"
  }), " Details"), /* @__PURE__ */ React.createElement(CourseAccessButton, {
    c,
    auth
  })))))))), /* @__PURE__ */ React.createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#courseCarousel",
    "data-bs-slide": "prev"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "carousel-control-prev-icon bg-dark "
  })), /* @__PURE__ */ React.createElement("button", {
    className: "carousel-control-next ",
    type: "button",
    "data-bs-target": "#courseCarousel",
    "data-bs-slide": "next"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "carousel-control-next-icon bg-dark"
  })))), /* @__PURE__ */ React.createElement("hr", null))));
};
export default HomePage;
