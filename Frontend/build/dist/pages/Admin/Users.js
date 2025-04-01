import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import {Link} from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const getAllUsers = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/all-users`);
      setUsers(data.users);
      setFilteredUsers(data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    if (keyword === "") {
      setFilteredUsers(users);
    } else {
      const results = users.filter((user) => user.name.toLowerCase().includes(keyword) || user.email.toLowerCase().includes(keyword));
      setFilteredUsers(results);
    }
  };
  const handleReset = () => {
    setSearch("");
    setFilteredUsers(users);
  };
  const handleDelete = async (id) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/auth/deleteuser/${id}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("User deleted successfully!");
            getAllUsers();
          } else {
            toast.error(response.data.message || "Failed to delete user.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete user.";
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
    title: "Admin Dashboard - TechReady"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-9 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h1", null, "All Users")), /* @__PURE__ */ React.createElement("div", {
    className: "row mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-8 col-sm-6 mb-2 mb-sm-0"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search Name or Email...",
    value: search,
    onChange: handleSearch
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-4 col-sm-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary w-100",
    onClick: handleReset
  }, "Reset"))), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped table-bordered"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Name"), /* @__PURE__ */ React.createElement("th", null, "Email"), /* @__PURE__ */ React.createElement("th", null, "Phone"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, filteredUsers.length > 0 ? filteredUsers.map((user, index) => /* @__PURE__ */ React.createElement("tr", {
    key: user._id
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, user.name), /* @__PURE__ */ React.createElement("td", null, user.email), /* @__PURE__ */ React.createElement("td", null, user.phone), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/users/view/${user._id}`,
    className: "btn btn-sm btn-light"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-eye"
  }), " View"), /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/users/edit/${user._id}`,
    className: "btn btn-sm btn-light mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDelete(user._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "5",
    className: "text-center"
  }, "No Users Found")))))))));
};
export default Users;
