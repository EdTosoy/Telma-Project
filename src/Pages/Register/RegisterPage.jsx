import React from "react";

import "./Register.scss";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <section className="register">
      <div className="register-content">
        <div className="left">
          <h1 className="heading">Create account today for free</h1>
          <p>Join with us in just 3 steps !</p>
          <div className="steps">
            <div className="step">
              <div className="active">1</div>
              <p>Details</p>
            </div>
            <div className="step">
              <div>2</div>
              <p>Confirmation</p>
            </div>
            <div className="step">
              <div>3</div>
              <p>Verification</p>
            </div>
          </div>
        </div>

        <div className="right">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
