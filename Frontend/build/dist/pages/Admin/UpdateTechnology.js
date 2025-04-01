import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const UpdateTechnology = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [technologyName, setTechnologyName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSingleTechnology = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/technology/get-single-technology/${params.id}`);
      setTechnologyName(data.technology.technologyName);
      setDescription(data.technology.description);
      setDifficulty(data.technology.difficulty);
      setTopics(data.technology.topics || []);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the technology");
    }
  };
  useEffect(() => {
    getSingleTechnology();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const technologyData = {technologyName, description, difficulty, topics};
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/technology/update-technology/${params.id}`, technologyData);
      if (data?.success) {
        toast.success("Technology Updated Successfully");
        navigate("/dashboard/admin/technology");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  const handleAddTopic = () => {
    setTopics([...topics, ""]);
  };
  const handleRemoveTopic = (index) => {
    const updatedTopics = topics.filter((_, i) => i !== index);
    setTopics(updatedTopics);
  };
  const handleTopicChange = (index, value) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = value;
    setTopics(updatedTopics);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Update Technology"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid pt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 col-md-3 mb-3"
  }, /* @__PURE__ */ React.createElement(AdminMenu, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-9 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "admin-form-container"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleUpdate
  }, /* @__PURE__ */ React.createElement("h1", null, "Update Technology"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Technology Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: technologyName,
    className: "form-control",
    onChange: (e) => setTechnologyName(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    value: description,
    className: "form-control",
    onChange: (e) => setDescription(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "form-label"
  }, "Topics"), topics.map((topic, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "input-group mb-2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: topic,
    onChange: (e) => handleTopicChange(index, e.target.value),
    className: "form-control"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-danger",
    onClick: () => handleRemoveTopic(index)
  }, "Remove"))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "btn btn-success",
    onClick: handleAddTopic
  }, "Add Topic")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    id: "submit-btn",
    className: "btn btn-primary",
    type: "submit",
    disabled: loading
  }, loading ? "Updating..." : "Update Technology"))))))));
};
export default UpdateTechnology;
