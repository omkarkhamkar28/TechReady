import React from "react";
import "../Styles/About.css";
import Layout from "../Components/Layout/Layout.js";
const About = () => {
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "About Techready"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "about",
    className: "container m-3"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "about-header",
    className: "text-center mb-4"
  }, /* @__PURE__ */ React.createElement("h1", null, "About TechReady"), /* @__PURE__ */ React.createElement("p", null, "Empowering Coders to Learn, Practice, and Excel")), /* @__PURE__ */ React.createElement("div", {
    id: "about-content",
    className: "row align-items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "about-text",
    className: "col-md-6"
  }, /* @__PURE__ */ React.createElement("h3", null, "Our Mission"), /* @__PURE__ */ React.createElement("p", null, "TechReady aims to bridge the gap between theory and practice by offering an interactive and engaging platform for coding enthusiasts. Our mission is to empower learners with the skills they need to excel in their coding journey through comprehensive notes, challenging coding games, mock tests, and certification courses."), /* @__PURE__ */ React.createElement("h3", null, "Why Choose Us?"), /* @__PURE__ */ React.createElement("ul", {
    id: "about-features"
  }, /* @__PURE__ */ React.createElement("li", null, "💡 Interactive Learning with Real-World Projects"), /* @__PURE__ */ React.createElement("li", null, "🏆 Gamified Challenges and Competitions"), /* @__PURE__ */ React.createElement("li", null, "🎓 Certification Courses with Progress Tracking"), /* @__PURE__ */ React.createElement("li", null, "📈 AI-Powered Personalized Learning Paths"), /* @__PURE__ */ React.createElement("li", null, "💬 Community Collaboration and Group Chat"))), /* @__PURE__ */ React.createElement("div", {
    id: "about-image",
    className: "col-md-6 text-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/about.jpeg",
    alt: "About TechReady",
    className: "img-fluid rounded"
  })))));
};
export default About;
