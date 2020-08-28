import React, { useState } from "react";
import { Link } from "react-router-dom";

import ErrorComponent from "./Error";

import "./Auth.scss";

export default function Auth() {
  const [popUpDisplay, setPopUpDisplay] = useState("none");
  const [showError, setShowError] = useState(false);

  const clickHandler = (e) => {
    setPopUpDisplay("none");
  };
  const submitHandler = (e) => {
    setShowError(true);
    e.preventDefault();
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const stopProp = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <ul className="auth">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li
          onClick={() => {
            setPopUpDisplay("grid");
          }}
        >
          <p>Log In</p>
        </li>
      </ul>

      <div
        className="auth-modal"
        style={{ display: popUpDisplay }}
        onClick={clickHandler}
      >
        <div className="auth-modal-content" onClick={stopProp}>
          <h2>Log in your account</h2>
          {showError && <ErrorComponent />}
          <form>
            <label>User Name</label>
            <input type="text" name="username" required={true} />
            <label>Password</label>
            <input type="password" name="password" required={true} />
            <button type="submit" onClick={submitHandler}>
              Log In
            </button>
          </form>
          <p>
            Create new account?{" "}
            <a href="/register" onClick={clickHandler}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
