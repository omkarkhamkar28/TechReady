import React from "react";
const CategoryForm = ({handleSubmit, value, setValue}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter new category",
    value,
    onChange: (e) => setValue(e.target.value)
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
};
export default CategoryForm;
