import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import "../../Styles/LeftSideBar.css";
import {NavLink, useLocation} from "react-router-dom";
import {useAuth} from "../../context/auth.js";
import {FaUser, FaCode, FaUserShield} from "react-icons/fa";
import axios from "axios";
const LeftSideBar = () => {
  const [auth] = useAuth();
  const location = useLocation();
  const [languages, setLanguages] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mocktest, setMockTest] = useState([]);
  const [technology, setTechnology] = useState([]);
  const getAllLanguages = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/get-language`);
      if (data?.success) {
        setLanguages(data?.language);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting languages");
    }
  };
  useEffect(() => {
    getAllLanguages();
  }, []);
  const getAllNotes = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-notes/get-languageNotes`);
      if (data?.success) {
        setNotes(data?.notes);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting languages");
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  const getAllLanguageMocktest = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/get-mocktest`);
      if (data?.success) {
        setMockTest(data?.questions);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting languages");
    }
  };
  useEffect(() => {
    getAllLanguageMocktest();
  }, []);
  const getAllTechnology = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/technology/get-technology`);
      setTechnology(data?.technology);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting technology");
    }
  };
  useEffect(() => {
    getAllTechnology();
  }, []);
  const getActiveClass = (path) => location.pathname.includes(path) ? "active-link" : "";
  return /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-container"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "navigation"
  }, /* @__PURE__ */ React.createElement("div", null, auth?.user?.role === 1 ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "nav-option"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: "nav-link admin-dashboard",
    to: `/dashboard/admin`
  }, /* @__PURE__ */ React.createElement(FaUserShield, {
    className: "icon"
  }), " Admin Dashboard"))) : ""), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h5", {
    id: "sidebarLanguageTitle"
  }, "Language Tutorial"), /* @__PURE__ */ React.createElement("div", {
    className: "container mt-3 sidebar-containers"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion",
    id: "sidebarAccordion"
  }, languages?.map((l, index) => /* @__PURE__ */ React.createElement("div", {
    className: "accordion-item  sidebar-item ",
    key: index
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "accordion-header sidebar-option ",
    id: `heading${l._id}`
  }, /* @__PURE__ */ React.createElement("button", {
    className: `accordion-button collapsed ${getActiveClass(l._id)}  sidebar-option fw-bold`,
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": `#collapse${l._id}`,
    "aria-expanded": "false",
    "aria-controls": `collapse${l._id}`
  }, /* @__PURE__ */ React.createElement(FaCode, {
    className: "me-2"
  }), " ", l.languageName)), /* @__PURE__ */ React.createElement("div", {
    id: `collapse${l._id}`,
    className: `accordion-collapse collapse ${getActiveClass(l._id)} sidebar-body`,
    "aria-labelledby": `heading${l._id}`,
    "data-bs-parent": "#sidebarAccordion"
  }, notes?.filter((note) => note.languageName === l._id).length > 0 && /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-sub-option"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: " mt-1 text-left ps-3 "
  }, "Notes :"), /* @__PURE__ */ React.createElement("hr", null)), /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, notes?.filter((note) => note.languageName === l._id).map((note, noteIndex) => /* @__PURE__ */ React.createElement(NavLink, {
    key: noteIndex,
    to: `/notes/${l._id}/${note._id}`,
    className: "nav-link text-dark notes-mocktest"
  }, note.notestitle))), mocktest?.filter((mt) => mt.languageName === l._id).length > 0 && /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-sub-option"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "fw-semibold ps-3 "
  }, "Mock Test :"), /* @__PURE__ */ React.createElement("hr", null)), /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, mocktest?.filter((mt) => mt.languageName === l._id).map((mt, mtIndex) => /* @__PURE__ */ React.createElement(NavLink, {
    key: mtIndex,
    to: `/lang-mocktest/${l._id}/${mt._id}`,
    className: "nav-link text-dark notes-mocktest"
  }, mt.testName)))))))))));
};
export default LeftSideBar;
