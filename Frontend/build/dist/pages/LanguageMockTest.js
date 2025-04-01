import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import {FaArrowLeft, FaArrowRight, FaCheck} from "react-icons/fa";
import Layout from "../Components/Layout/Layout.js";
const LanguageMockTest = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [languageName, setLanguageName] = useState("");
  const [testName, setTestName] = useState([]);
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
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
  const getlanguageMockTest = async () => {
    try {
      const {data} = await axios.get(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API}/language-mocktest/get-single-mocktest/${params.mocktest}`);
      setTestName(data.mocktest.testName);
      setQuestions(data.mocktest.questions);
      setAnswers(new Array(data.mocktest.questions.length).fill(""));
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong in getting the mock test");
    }
  };
  useEffect(() => {
    getlanguageMockTest();
  }, []);
  const handleQuestionNavigation = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
    setSelectedOption(answers[index] || "");
    setCurrentQuestion(index);
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
  };
  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption(answers[currentQuestion + 1] || "");
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setSelectedOption(answers[currentQuestion - 1] || "");
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };
  const handleStartExam = () => {
    setExamStarted(true);
  };
  return /* @__PURE__ */ React.createElement(Layout, {
    title: "Dashboard - language Mock Test"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid my-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "display-6 mb-3"
  }, testName), /* @__PURE__ */ React.createElement("h4", {
    className: "text-muted"
  }, languageName)), !examStarted ? /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handleStartExam,
    className: "btn btn-success btn-lg px-5 py-2 shadow-sm"
  }, "Start Exam")) : currentQuestion < questions.length ? /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "d-none d-lg-block bg-white shadow rounded p-3 col-lg-3 me-3 ",
    style: {
      height: "400px",
      overflowY: "auto"
    }
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-center mb-3"
  }, "Questions"), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-wrap justify-content-center gap-2"
  }, questions.length > 0 && questions.map((_, index) => /* @__PURE__ */ React.createElement("button", {
    key: index,
    onClick: () => handleQuestionNavigation(index),
    className: `btn ${currentQuestion === index ? "btn-success" : "btn-outline-success"} shadow-sm`,
    style: {
      width: "50px",
      height: "50px",
      fontSize: "16px",
      borderRadius: "8px",
      transition: "transform 0.2s ease"
    },
    onMouseOver: (e) => e.target.style.transform = "scale(1.1)",
    onMouseOut: (e) => e.target.style.transform = "scale(1)"
  }, "Q", index + 1)))), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-8 col-12 card mx-auto my-4 shadow-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title text-muted text-wrap"
  }, questions[currentQuestion].question.split("\n").map((line, index) => /* @__PURE__ */ React.createElement(React.Fragment, {
    key: index
  }, line, /* @__PURE__ */ React.createElement("br", null)))), /* @__PURE__ */ React.createElement("div", {
    className: "list-group"
  }, questions[currentQuestion].options.map((option, index) => /* @__PURE__ */ React.createElement("label", {
    key: index,
    className: "list-group-item"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "option",
    value: option,
    checked: selectedOption === option,
    onChange: () => handleOptionChange(option),
    className: "form-check-input me-2"
  }), option))), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex justify-content-between mt-3"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handlePreviousQuestion,
    className: "btn btn-warning d-flex align-items-center gap-1",
    disabled: currentQuestion === 0
  }, /* @__PURE__ */ React.createElement(FaArrowLeft, null), "Previous"), currentQuestion < questions.length - 1 ? /* @__PURE__ */ React.createElement("button", {
    onClick: handleNextQuestion,
    className: "btn btn-primary px-4 shadow d-flex align-items-center gap-1"
  }, "Next", /* @__PURE__ */ React.createElement(FaArrowRight, null)) : /* @__PURE__ */ React.createElement("button", {
    onClick: handleNextQuestion,
    className: "btn btn-success px-4 shadow d-flex align-items-center gap-1"
  }, "Submit", /* @__PURE__ */ React.createElement(FaCheck, null))))), /* @__PURE__ */ React.createElement("div", {
    className: "d-lg-none bg-light p-2 w-100 text-center"
  }, /* @__PURE__ */ React.createElement("h6", null, "Questions"), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex overflow-auto gap-1",
    style: {
      whiteSpace: "nowrap",
      paddingBottom: "5px"
    }
  }, questions.length > 0 && questions.map((_, index) => /* @__PURE__ */ React.createElement("button", {
    key: index,
    onClick: () => handleQuestionNavigation(index),
    className: `btn btn-sm ${currentQuestion === index ? "btn-success" : "btn-outline-success"} shadow-sm mx-1`,
    style: {
      width: "50px",
      height: "50px",
      minWidth: "50px",
      minHeight: "50px",
      fontSize: "16px",
      borderRadius: "8px",
      transition: "transform 0.2s ease"
    },
    onMouseOver: (e) => e.target.style.transform = "scale(1.1)",
    onMouseOut: (e) => e.target.style.transform = "scale(1)"
  }, "Q", index + 1)))))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "card mx-auto my-4 bg-success text-white shadow-lg",
    style: {maxWidth: "400px"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body text-center"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "card-title"
  }, "Test Completed!"), /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, "Your Score: ", score, " / ", questions.length), /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, "Percentage: ", (score / questions.length * 100).toFixed(2), "%"), /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "btn btn-light mt-2"
  }, "Home"))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-8 col-md-8 col-12 card mx-auto my-4 shadow-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body text-center"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "mt-4"
  }, "Answers Summary:"), questions.map((question, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index,
      className: "card my-2 shadow-sm"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "card-body"
    }, /* @__PURE__ */ React.createElement("h6", null, "Q", index + 1, ": ", question.question), /* @__PURE__ */ React.createElement("div", {
      className: "list-group"
    }, question.options.map((option, optIndex) => {
      let answerStyle = "bg-light";
      if (answers[index] === option && option === question.answer) {
        answerStyle = "bg-success text-white";
      } else if (answers[index] === option) {
        answerStyle = "bg-danger text-white";
      } else if (option === question.answer) {
        answerStyle = "bg-primary text-white";
      }
      return /* @__PURE__ */ React.createElement("label", {
        key: optIndex,
        className: `list-group-item ${answerStyle} my-1 rounded`
      }, option);
    }))));
  }), /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "btn btn-light mt-3"
  }, "Home")))))));
};
export default LanguageMockTest;
