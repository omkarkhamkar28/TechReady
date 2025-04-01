import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, Link, useParams} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
const UpdateLanguageDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [languageName, setLanguageName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [mockTest, setMocktest] = useState([]);
  const getSingleLanguage = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/get-single-language/${params.lang}`);
      setLanguageName(data.language.languageName);
      setDescription(data.language.description);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the language");
    }
  };
  useEffect(() => {
    getSingleLanguage();
  }, []);
  const getLanguageNotes = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-notes/get-languageNotes/${params.lang}`);
      setNotes(data.notes);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the notes");
    }
  };
  useEffect(() => {
    getLanguageNotes();
  }, []);
  const getLanguageMockTest = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/get-mocktest/${params.lang}`);
      setMocktest(data.questions);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the mock test");
    }
  };
  useEffect(() => {
    getLanguageMockTest();
  }, []);
  const handleDeleteNotes = async (id) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-notes/delete-languageNotes/${id}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("Notes deleted successfully!");
            getLanguageNotes();
          } else {
            toast.error(response.data.message || "Failed to delete note.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete note.";
          toast.error(errorMessage);
        }
      },
      className: "btn btn-danger btn-sm m-1"
    }, "Yes"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => toast.dismiss(t.id),
      className: "btn btn-secondary btn-sm m-1"
    }, "No")));
  };
  const handleDeleteMockTest = async (id) => {
    toast((t) => /* @__PURE__ */ React.createElement("span", {
      className: "m-1"
    }, "Are you sure you want to delete?", /* @__PURE__ */ React.createElement("button", {
      onClick: async () => {
        toast.dismiss(t.id);
        try {
          const response = await axios.delete(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/delete-mocktest/${id}`);
          console.log("Delete Response:", response.data);
          if (response.data.success) {
            toast.success("Mock test deleted successfully!");
            getLanguageMockTest();
          } else {
            toast.error(response.data.message || "Failed to delete mock test.");
          }
        } catch (error) {
          console.error("Delete error:", error);
          const errorMessage = error.response?.data?.message || "Failed to delete mock test.";
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
    title: "Dashboard - Language update"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-md-3 mb-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-9 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 card shadow-lg border-0 rounded-3 mb-3 text-center bg-light"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body p-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title text-primary fw-bold",
    style: {fontSize: "2rem", marginBottom: "10px"}
  }, languageName), /* @__PURE__ */ React.createElement("p", {
    className: "card-text text-muted text-wrap",
    style: {fontSize: "1.2rem", marginBottom: "15px"}
  }, description), /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-languageName/${params.lang}`,
    className: "btn btn-outline-primary mx-3 mb-3",
    style: {padding: "10px 20px", fontSize: "1rem", borderRadius: "8px"}
  }, "Edit Language"))), /* @__PURE__ */ React.createElement("div", {
    className: " col-12 row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " col-sm-10 mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/add-notes/${params.lang}`,
    className: "btn btn-sm btn-success mb-3"
  }, "Add Notes"), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "row-light text-center",
    colSpan: "4"
  }, "Notes")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Notes Title"), /* @__PURE__ */ React.createElement("th", null, "Sub titles"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, notes?.length > 0 ? notes.map((note, index) => /* @__PURE__ */ React.createElement("tr", {
    key: note._id
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, note.notestitle || "N/A"), /* @__PURE__ */ React.createElement("td", null, note.subtitle && Array.isArray(note.subtitle) ? /* @__PURE__ */ React.createElement("ul", {
    style: {listStyleType: "square", paddingLeft: "20px"}
  }, note.subtitle.map((sub, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: {
      margin: "5px 0",
      backgroundColor: "#f0f4f8",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ddd"
    }
  }, sub))) : /* @__PURE__ */ React.createElement("div", {
    style: {
      padding: "5px",
      backgroundColor: "#f8f9fa",
      borderRadius: "5px",
      border: "1px solid #ddd"
    }
  }, note.subtitle || "N/A")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-notes/${params.lang}/${note._id}`,
    className: "btn btn-sm btn-success mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDeleteNotes(note._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "4",
    className: "text-center"
  }, "No Notes available.")))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-sm-10 mb-3"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/add-languageMocktest/${params.lang}`,
    className: "btn btn-sm btn-success mb-3"
  }, "Add Mock Test"), /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "table table-bordered table-striped"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "table-dark"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    className: "row-light text-center",
    colSpan: "3"
  }, "Mock Test")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "#"), /* @__PURE__ */ React.createElement("th", null, "Mock Test Name"), /* @__PURE__ */ React.createElement("th", null, "Action"))), /* @__PURE__ */ React.createElement("tbody", null, mockTest?.length > 0 ? mockTest.map((mt, index) => /* @__PURE__ */ React.createElement("tr", {
    key: mt.id || index
  }, /* @__PURE__ */ React.createElement("td", null, index + 1), /* @__PURE__ */ React.createElement("td", null, mt.testName || "N/A"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/dashboard/admin/update-languageMocktest/${params.lang}/${mt._id}`,
    className: "btn btn-sm btn-success mx-2"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-pencil"
  }), " Edit"), /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-sm btn-light mx-2",
    onClick: () => handleDeleteMockTest(mt._id)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "bi bi-trash"
  }), " Delete")))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: "3",
    className: "text-center"
  }, "No mock test available.")))))))))));
};
export default UpdateLanguageDetails;
