import React from "react";

function Validation(values) {
  let errors = {};
  const regex = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  if (!values.name) {
    errors.name = "Name Required";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!regex.test(values.email)) {
    errors.email = "invalid Email";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than 5 char";
  }
  return errors;
}
export default Validation;
