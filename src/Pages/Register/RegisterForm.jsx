import React, { useState } from "react";

import PopError from "./PopError";

export default function RegisterForm() {
  const [showPopError, setShowPopError] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setShowPopError(true);
    setTimeout(() => {
      setShowPopError(false);
    }, 2000);
  };
  return (
    <form>
      {showPopError && <PopError />}
      <div className="row">
        <label>Username</label>
        <input type="text" required={true} />
      </div>
      <div className="row">
        <label>Password</label>
        <input type="Password" required={true} />
      </div>
      <div className="row-doubled">
        <div className="row">
          <label>First Name</label>
          <input type="text" required={true} />
        </div>
        <div className="row">
          <label>Last name</label>
          <input type="text" required={true} />
        </div>
      </div>
      <div className="row">
        <label>Account Number</label>
        <input type="text" required={true} />
      </div>
      <div className="row">
        <label>Contact Number</label>
        <input type="text" required={true} />
      </div>
      <div className="row">
        <label>Email Address</label>
        <input type="email" required={true} />
      </div>
      <button onClick={clickHandler}>Continue</button>
    </form>
  );
}
