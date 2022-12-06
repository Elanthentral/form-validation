import React, { useEffect, useState } from "react";
import Validation from "./Validation";

function UseForm(submitForm) {
  const intialValue = { name: "", email: "", password: "" };
  const [formValue, setFormValue] = useState(intialValue);
  const [fromerror, setFormError] = useState({});
  const [dataCorrect, setDatacorrect] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevformvalue) => ({
      ...prevformvalue,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError(Validation(formValue));
    setDatacorrect(true);
  };
  useEffect(() => {
    if (Object.keys(fromerror).length === 0 && dataCorrect) {
      submitForm(true);
      console.log(formValue);
    }
  }, [fromerror]);

  return { handleChange, handleFormSubmit, formValue, fromerror };
}

export default UseForm;
