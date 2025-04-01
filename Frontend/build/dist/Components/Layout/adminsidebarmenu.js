import React from "react";
import {NavLink} from "react-router-dom";
import "../../Styles/AdminMenu.css";
const AdminMenu = () => {
  return /* @__PURE__ */ React.createElement("div", {
    id: "dashboard-menu",
    className: "list-group shadow-lg rounded p-4 col-10 m-auto"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary d-lg-none mb-2",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#adminSidebarSmall",
    "aria-controls": "adminSidebarSmall",
    style: {fontSize: "1.2rem", padding: "8px 16px", borderRadius: "8px"}
  }, "Admin Panel ☰"), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary d-none d-lg-inline-block mb-2",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#adminSidebarLarge",
    "aria-controls": "adminSidebarLarge",
    style: {fontSize: "1.2rem", padding: "8px 16px", borderRadius: "8px"}
  }, "Admin Panel  ☰"), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas offcanvas-end d-lg-none bg-light shadow-sm",
    "data-bs-scroll": "true",
    tabIndex: "-1",
    id: "adminSidebarSmall",
    "aria-labelledby": "adminSidebarSmallLabel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-header"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "offcanvas-title",
    id: "adminSidebarSmallLabel"
  }, "Menu (Small)"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn-close text-reset",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-body"
  }, /* @__PURE__ */ React.createElement(SidebarContent, null))), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas offcanvas-end d-none d-lg-block bg-light shadow-sm",
    "data-bs-scroll": "true",
    tabIndex: "-1",
    id: "adminSidebarLarge",
    "aria-labelledby": "adminSidebarLargeLabel"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-header"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "offcanvas-title",
    id: "adminSidebarLargeLabel"
  }, "Menu (Large)"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn-close text-reset",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "offcanvas-body"
  }, /* @__PURE__ */ React.createElement(SidebarContent, null))));
};
const SidebarContent = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
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
}, "Add Course"))))));
export default AdminMenu;
