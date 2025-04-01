import React from "react";
import {useAuth} from "../../context/auth.js";
import Layout from "../../Components/Layout/Layout.js";
import {FaPlus} from "react-icons/fa";
import "../../Styles/Achievement.css";
import {NavLink, Link} from "react-router-dom";
const Dashboard = () => {
  const [auth] = useAuth();
  const achievements = [
    {
      title: "Completed JavaScript Basics",
      description: "Finished the JavaScript Basics course with outstanding performance.",
      date: "2023-01-15",
      image: "https://images.unsplash.com/photo-1587620931134-2f7bb43a3e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificatePath: "/certificates/javascript-basics"
    },
    {
      title: "React Pro",
      description: "Mastered React concepts and built a complex project from scratch.",
      date: "2023-02-20",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificatePath: "/certificates/react-pro"
    },
    {
      title: "Node.js Expert",
      description: "Achieved full understanding of Node.js fundamentals and server-side development.",
      date: "2023-03-10",
      image: "https://images.unsplash.com/photo-1581091870622-d5c2241423f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificatePath: "/certificates/nodejs-expert"
    },
    {
      title: "MongoDB Mastery",
      description: "Demonstrated excellent skills in NoSQL database management with MongoDB.",
      date: "2023-04-05",
      image: "https://images.unsplash.com/photo-1590608897129-79b8ddc87a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificatePath: "/certificates/mongodb-mastery"
    },
    {
      title: "Full-Stack MERN",
      description: "Built a full-stack MERN application from start to finish.",
      date: "2023-05-01",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificatePath: "/certificates/fullstack-mern"
    }
  ];
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "User Dashboard - techready"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-10 m-auto mb-3 mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card p-4 shadow-lg rounded border-0",
    style: {backgroundColor: "#f4f7fa"}
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "title text-center text-primary mb-4"
  }, "User Profile"), /* @__PURE__ */ React.createElement("div", {
    className: "text-center position-relative mb-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://www.pngmart.com/files/23/Profile-PNG-Photo.png",
    alt: "Profile",
    className: "rounded-circle shadow",
    style: {width: "150px", height: "150px", objectFit: "cover"}
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary position-absolute",
    style: {bottom: "0", right: "40%", borderRadius: "50%"}
  }, /* @__PURE__ */ React.createElement(FaPlus, null))), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "User Name:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: auth?.user.name,
    className: "form-control rounded-pill shadow-sm",
    readOnly: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "User Email:"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    value: auth?.user.email,
    className: "form-control rounded-pill shadow-sm",
    readOnly: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "User Phone:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: auth?.user.phone,
    className: "form-control rounded-pill shadow-sm",
    readOnly: true
  }))))), /* @__PURE__ */ React.createElement("div", {
    id: "achievements-page",
    className: "container col-10 py-5 mb-3"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center mb-5"
  }, "My Achievements"), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, achievements.map((ach, idx) => /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6 col-lg-4 mb-4",
    key: idx
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card achievement-card"
  }, /* @__PURE__ */ React.createElement("img", {
    src: ach.image,
    className: "card-img-top",
    alt: ach.title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title"
  }, ach.title), /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, ach.description), /* @__PURE__ */ React.createElement("small", {
    className: "text-muted d-block"
  }, "Achieved on ", ach.date), ach.certificatePath && /* @__PURE__ */ React.createElement(NavLink, {
    to: auth?.user?._id ? `/profile/${auth?.user?._id}/achievement/${ach.title}` : "#",
    className: "btn btn-outline-primary btn-sm mt-3"
  }, "View Certificate")))))))));
};
export default Dashboard;
