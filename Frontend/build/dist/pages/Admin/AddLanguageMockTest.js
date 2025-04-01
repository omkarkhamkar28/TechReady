import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const AddLanguageMockTest = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [languageName, setLanguageName] = useState("");
  const [mockTest, setMockTest] = useState("");
  const [questions, setQuestions] = useState(Array(2).fill(""));
  const [options, setOptions] = useState(Array(2).fill(["", "", "", ""]));
  const [answers, setAnswers] = useState(Array(2).fill(""));
  const [difficulties, setDifficulties] = useState(Array(2).fill(""));
  const [loading, setLoading] = useState(false);
  const getSinglelanguage = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language/get-single-language/${params.lang}`);
      setLanguageName(data.language.languageName);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the language");
    }
  };
  useEffect(() => {
    getSinglelanguage();
  }, []);
  const getNextMockTestNumber = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/get-mocktest-number/${params.lang}`);
      setMockTest(data.testName);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the testName");
    }
  };
  useEffect(() => {
    getNextMockTestNumber();
  }, []);
  const handleQuestionChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex] = value;
    setQuestions(newQuestions);
  };
  const handleOptionChange = (qIndex, index, value) => {
    const newOptions = [...options];
    newOptions[qIndex] = [...newOptions[qIndex]];
    newOptions[qIndex][index] = value;
    setOptions(newOptions);
  };
  const handleAnswerChange = (qIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };
  const handleDifficultyChange = (qIndex, value) => {
    const newDifficulties = [...difficulties];
    newDifficulties[qIndex] = value;
    setDifficulties(newDifficulties);
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      for (let i = 0; i < questions.length; i++) {
        const questionText = questions[i];
        const opts = options[i];
        const ans = answers[i];
        const diff = difficulties[i];
        if (!questionText || !Array.isArray(opts) || !ans || opts.length !== 4 || opts.some((opt) => !opt) || ans === void 0 || !["Easy", "Medium", "Hard"].includes(diff)) {
          toast.error(`Question ${i + 1} is incomplete`);
          setLoading(false);
          return;
        }
      }
      const mockTestData = questions.map((question, index) => ({
        question,
        options: options[index],
        answer: answers[index],
        difficulty: difficulties[index]
      }));
      const {data} = await axios.post(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/add-mocktest/${params.lang}`, {questions: mockTestData}, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (data?.success) {
        toast.success(`Mock Test Created Successfully`);
        navigate(`/dashboard/admin/update-language/${params.lang}`);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Something went wrong while creating the mock test");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Add language mocktest "
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
    onSubmit: handleCreate
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center mb-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "display-4"
  }, "Create Mock Test")), /* @__PURE__ */ React.createElement("div", {
    className: "card shadow p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, languageName, " : ", mockTest)))), [...Array(2)].map((_, qIndex) => /* @__PURE__ */ React.createElement("div", {
    key: qIndex,
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("h5", null, "Question ", qIndex + 1, ":"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Write question :"), /* @__PURE__ */ React.createElement("textarea", {
    type: "text",
    value: questions[qIndex] || "",
    placeholder: `Write question ${qIndex + 1}`,
    className: "form-control",
    onChange: (e) => handleQuestionChange(qIndex, e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Write options :"), [0, 1, 2, 3].map((index) => /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6 mb-3",
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, `Option ${index + 1}`), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: options[qIndex]?.[index] || "",
    placeholder: `Enter Option ${index + 1}`,
    className: "form-control shadow-sm",
    onChange: (e) => handleOptionChange(qIndex, index, e.target.value)
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Select answer :"), /* @__PURE__ */ React.createElement("select", {
    value: answers[qIndex] || "",
    className: "form-select shadow-sm",
    onChange: (e) => handleAnswerChange(qIndex, e.target.value)
  }, /* @__PURE__ */ React.createElement("option", {
    value: "",
    disabled: true
  }, "Select the Correct Answer"), options[qIndex]?.filter((opt) => opt.trim() !== "").map((opt, idx) => /* @__PURE__ */ React.createElement("option", {
    key: idx,
    value: opt
  }, opt)))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Select difficulty level :"), /* @__PURE__ */ React.createElement("select", {
    value: difficulties[qIndex] || "",
    className: "form-select shadow-sm",
    onChange: (e) => handleDifficultyChange(qIndex, e.target.value)
  }, /* @__PURE__ */ React.createElement("option", {
    value: "",
    disabled: true
  }, "Choose Difficulty Level"), /* @__PURE__ */ React.createElement("option", {
    value: "Easy"
  }, "Easy"), /* @__PURE__ */ React.createElement("option", {
    value: "Medium"
  }, "Medium"), /* @__PURE__ */ React.createElement("option", {
    value: "Hard"
  }, "Hard"))))), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3 text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary w-50",
    type: "submit",
    disabled: loading
  }, loading ? "Creating..." : "Create Notes"))))))));
};
export default AddLanguageMockTest;
