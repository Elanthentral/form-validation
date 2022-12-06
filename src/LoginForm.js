import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import UseForm from "./UseForm";

function LoginForm({ submitForm }) {
  const { handleChange, handleFormSubmit, formValue, fromerror } =
    UseForm(submitForm);
  return (
    <div className="container">
      <div className="card ">
        <div className="card-title">
          <h3 className="text-center mt-2 text-decoration-underline border-success border-2">
            Login Form
          </h3>
        </div>
        <div className="card-body">
          <form className="from-group" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <lable className="form-control-label">Name</lable>
              <input
                className="form-control"
                placeholder="Enter your Name"
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
              />
              {fromerror.name && <p className="error">{fromerror.name}</p>}
            </div>
            <div className="mb-3">
              <lable className="form-control-label">Email</lable>
              <input
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
              {fromerror.email && <p className="error">{fromerror.email}</p>}
            </div>
            <div className="mb-3">
              <lable className="form-control-label">Password</lable>
              <input
                className="form-control"
                placeholder="Enter your Password"
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
              {fromerror.password && (
                <p className="error">{fromerror.password}</p>
              )}
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
