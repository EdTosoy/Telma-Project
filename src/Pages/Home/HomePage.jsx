import React from "react";

import CreaditCard from "./creditCard.svg";
import Person from "./personImage.png";
import ServicesRight from "./ServicesRight";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="credit-card-wrapper">
          <img src={CreaditCard} alt="credit card" />
        </div>
        <div className="person-wrapper">
          <img src={Person} alt="Person" />
        </div>
        <p className="tag-line">
          For Your Personal And Professional Banking Needs.
        </p>
      </div>
      <div className="white"></div>
      <div className="services">
        <div className="services-content">
          <div className="left">
            <h2>Services</h2>
            <p>
              We Offer Products And Services For Your Personal And Professional
              Banking Needs.
            </p>
            <h3>Ensuring High Level Of Customer Service.</h3>
          </div>
          <ServicesRight />
        </div>
      </div>
    </section>
  );
}
