import React from "react";
import "./HomepageAnimation.css";
const HomePageAnimation = () => {
  const courses = [
    {name: "CSS Course", description: "3 month crash course in techready", img: "./images/css.png", position: 1},
    {name: "Python Course", description: "3 month crash course in techready", img: "./images/py.png", position: 2},
    {name: "Express Course", description: "3 month crash course in techready", img: "./images/express.png", position: 3},
    {name: "C++ Course", description: "3 month crash course in techready", img: "./images/cpp.png", position: 4}
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "banner "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "slider d-flex flex-wrap animationcontianer",
    style: {"--quantity": courses.length}
  }, courses.map((course, index) => /* @__PURE__ */ React.createElement("div", {
    className: "item",
    style: {"--position": course.position},
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card m-5",
    style: {width: "30vh"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body "
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title"
  }, course.name), /* @__PURE__ */ React.createElement("img", {
    src: course.img,
    alt: course.name
  }), /* @__PURE__ */ React.createElement("p", {
    style: {color: "black"}
  }, course.description), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-info ms-1 m-2"
  }, " More... "), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-info m-1"
  }, " Start Learning... "))))))));
};
export default HomePageAnimation;
