import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
const Technology = () => {
  const [technology, setTechnology] = useState([]);
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
  const handleDelete = async (id) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/technology/delete-technology/${id}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("language deleted successfully!");
            getAllTechnology();
          } else {
            toast.error(response.data.message || "Failed to delete language.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete language.";
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
    title: "Dashboard - Courses"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-md-3 mb-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-9 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive "
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Technology Name"), /* @__PURE__ */ React.createElement("th", null, "Description"), /* @__PURE__ */ React.createElement("th", null, "Difficulty"), /* @__PURE__ */ React.createElement("th", null, "Topics"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, technology.length > 0 ? technology.map((t, index) => /* @__PURE__ */ React.createElement("tr", {
    key: t.id || index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, t.technologyName || "N/A"), /* @__PURE__ */ React.createElement("td", null, t.description || "N/A"), /* @__PURE__ */ React.createElement("td", null, t.difficulty || "N/A"), /* @__PURE__ */ React.createElement("td", null, t.topics?.join(", ") || "N/A"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-technology/${t._id}`,
    className: "btn btn-sm btn-light mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDelete(t._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "6"
  }, "No technology available.")))))))));
};
export default Technology;
