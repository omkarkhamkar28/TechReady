import React, {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
const Spinner = ({path = "login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1e3);
    count === 0 && navigate(`/${path}`, {
      state: location.pathname
    });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    style: {height: "100vh"}
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "Text-center"
  }, "redirecting to you in ", count, " second "), /* @__PURE__ */ React.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Loading..."))));
};
export default Spinner;
