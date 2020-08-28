import React from "react";

import Navigation from "./Navigation";
import Auth from "./Auth";
import Logo from "./Logo";

import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Navigation />
        <Auth/>
      </div>
    </header>
  );
}
