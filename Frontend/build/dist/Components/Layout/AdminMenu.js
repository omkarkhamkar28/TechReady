import React from "react";
import {NavLink} from "react-router-dom";
import "../../Styles/AdminMenu.css";
const AdminMenu = () => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "dashboard-menu",
    className: "list-group shadow-lg rounded p-4 col-10 m-auto"
  }, /* @__PURE__ */ React.createElement("h3", {
    id: "admin-title",
    className: "py-2 rounded"
  }, "Admin Panel"), /* @__PURE__ */ React.createElement("div", {
    className: "list-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/users",
    className: "list-group-item list-group-item-action admin-link my-2 py-2"
  }, "Users")), /* @__PURE__ */ React.createElement("div", {
    className: "accordion my-2",
    id: "languageAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-item"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "accordion-header",
    id: "headingLanguage"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseLanguage",
    "aria-expanded": "false",
    "aria-controls": "collapseLanguage"
  }, "Language Section")), /* @__PURE__ */ React.createElement("div", {
    id: "collapseLanguage",
    className: "accordion-collapse collapse",
    "aria-labelledby": "headingLanguage",
    "data-bs-parent": "#languageAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/language",
    className: "dropdown-item"
  }, "All Language"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/add-language",
    className: "dropdown-item"
  }, "Add Language"))))), /* @__PURE__ */ React.createElement("div", {
    className: "accordion my-2",
    id: "TechnologyAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-item"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "accordion-header",
    id: "headingTechnology"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTechnology",
    "aria-expanded": "false",
    "aria-controls": "collapseTechnology"
  }, "Technology Section")), /* @__PURE__ */ React.createElement("div", {
    id: "collapseTechnology",
    className: "accordion-collapse collapse",
    "aria-labelledby": "headingTechnology",
    "data-bs-parent": "#TechnologyAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/technology",
    className: "dropdown-item"
  }, "All Technology"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/add-technology",
    className: "dropdown-item"
  }, "Add Technology"))))), /* @__PURE__ */ React.createElement("div", {
    className: "accordion my-2",
    id: "courseAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-item"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "accordion-header",
    id: "headingCourse"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseCourse",
    "aria-expanded": "false",
    "aria-controls": "collapseCourse"
  }, "Course Section")), /* @__PURE__ */ React.createElement("div", {
    id: "collapseCourse",
    className: "accordion-collapse collapse",
    "aria-labelledby": "headingCourse",
    "data-bs-parent": "#courseAccordion"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "accordion-body"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/courses",
    className: "dropdown-item"
  }, "All Course"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dashboard/admin/add-course",
    className: "dropdown-item"
  }, "Add Course")))))));
};
export default AdminMenu;
