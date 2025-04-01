import React from "react";
import "../../Styles/CoursesPage.css";
const courses = [
  {
    name: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript, the language of the web.",
    progress: 60,
    image: "https://wallpaperaccess.com/full/1555163.jpg"
  },
  {
    name: "React for Beginners",
    description: "Get started with React, building dynamic and reactive UIs.",
    progress: 40,
    image: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
  },
  {
    name: "Node.js Essentials",
    description: "Understand server-side JavaScript with Node.js core concepts.",
    progress: 75,
    image: "https://tse2.mm.bing.net/th?id=OIP.5gf2JQQmWla-GU-WXTrGcgHaE8&pid=Api&P=0&h=180"
  },
  {
    name: "MongoDB Mastery",
    description: "Dive into NoSQL databases with MongoDB and learn key operations.",
    progress: 50,
    image: "https://tse3.mm.bing.net/th?id=OIP.iWsHU_6Lw7Ss3zTt95gQZgHaD8&pid=Api&P=0&h=180"
  },
  {
    name: "Full-Stack MERN",
    description: "Combine MongoDB, Express, React, and Node to build full-stack apps.",
    progress: 20,
    image: "https://wallpapercave.com/wp/wp8904080.jpg"
  }
];
const CourseCard = ({name, description, progress, image}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "card mb-4 ",
    style: {width: "18rem"}
  }, /* @__PURE__ */ React.createElement("img", {
    src: image,
    className: "card-img-top",
    alt: name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title"
  }, name), /* @__PURE__ */ React.createElement("p", {
    className: "course-description"
  }, description), /* @__PURE__ */ React.createElement("div", {
    className: "progress mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "progress-bar progress-bar-striped bg-success",
    role: "progressbar",
    style: {width: `${progress}%`},
    "aria-valuenow": progress,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, progress, "%")), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary w-100"
  }, "View Course")));
};
const CoursesPage = () => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "courses-page",
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center mb-5 pt-4"
  }, "My Courses"), /* @__PURE__ */ React.createElement("div", {
    className: "row justify-content-center"
  }, courses.map((course) => /* @__PURE__ */ React.createElement("div", {
    className: "col-md-4 d-flex justify-content-center",
    key: course.name
  }, /* @__PURE__ */ React.createElement(CourseCard, {
    ...course
  })))));
};
export default CoursesPage;
