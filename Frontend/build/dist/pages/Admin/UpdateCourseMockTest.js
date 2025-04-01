import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";
import "../../Styles/FormStyle.css";
const UpdateCourseMockTest = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [courseName, setCourseName] = useState("");
  const [mockTest, setMockTest] = useState("");
  const [mockTestNumber, setMockTestNumber] = useState("");
  const [questions, setQuestions] = useState(Array(20).fill(""));
  const [options, setOptions] = useState(Array(20).fill(["", "", "", ""]));
  const [answers, setAnswers] = useState(Array(20).fill(""));
  const [difficulties, setDifficulties] = useState(Array(20).fill(""));
  const [loading, setLoading] = useState(false);
  const getSingleCourse = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course/get-single-course/${params.course}`);
      setCourseName(data.course.courseName);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the course");
    }
  };
  useEffect(() => {
    getSingleCourse();
  }, []);
  const getSingleMocktest = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-mocktest/get-single-mocktest/${params.mocktest}`);
      setMockTest(data.mocktest.testName);
      setMockTestNumber(data.mocktest.testNumber);
      setQuestions(data.mocktest.questions.map((q) => q.question));
      setOptions(data.mocktest.questions.map((q) => q.options));
      setAnswers(data.mocktest.questions.map((q) => q.answer));
      setDifficulties(data.mocktest.questions.map((q) => q.difficulty));
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting the mock test");
    }
  };
  useEffect(() => {
    getSingleMocktest();
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
  const handleUpdate = async (e) => {
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
      const {data} = await axios.put(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/course-mocktest/update-mocktest/${params.mocktest}`, {
        questions: mockTestData,
        testName: mockTest,
        testNumber: mockTestNumber
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (data?.success) {
        toast.success(`Mock Test Updating Successfully`);
        navigate(`/dashboard/admin/get-course/${params.course}`);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Something went wrong while updating the mock test");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - Add course mocktest "
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
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center mb-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "display-4"
  }, "Update Mock Test")), /* @__PURE__ */ React.createElement("div", {
    className: "card shadow p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, courseName, " : ", mockTest)))), [...Array(20)].map((_, qIndex) => /* @__PURE__ */ React.createElement("div", {
    key: qIndex,
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("h5", null, "Question ", qIndex + 1, ":"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Write question :"), /* @__PURE__ */ React.createElement("input", {
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
  }, loading ? "Updating..." : "Update Mock Test"))))))));
};
export default UpdateCourseMockTest;
