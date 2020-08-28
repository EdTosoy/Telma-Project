import React from "react";

import "./Others.scss";

export default function Others() {
  const otherNavs = [
    {
      id: 1,
      name: "Contact US",
      url: "/contacts",
    },
    {
      id: 2,
      name: "News",
      url: "/news",
    },
    {
      id: 3,
      name: "FAQ",
      url: "/faq",
    },
    {
      id: 4,
      name: "Careers",
      url: "/careers",
    },
    {
      id: 5,
      name: "Statement Privacy",
      url: "/statement",
    },
    {
      id: 6,
      name: "Terms and Conditions",
      url: "/terms",
    },
  ];
  return (
    <ul className="others">
      {otherNavs.map((otherNav) => (
        <li key={otherNav.id}>
          <a href={otherNav.url} target="_blank">
            {otherNav.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
