import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export default function Navigation() {
  const mainNavs = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Subsidiaries",
      path: "/subsidiaries",
    },
    {
      id: 4,
      name: "Remit Status",
      path: "/status",
    },
  ];
  return (
    <ul className="navigation">
      {mainNavs.map((mainNav) => (
        <li key={mainNav.id}>
          <NavLink exact to={mainNav.path} activeClassName="selected">
            {mainNav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
