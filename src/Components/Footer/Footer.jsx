import React from "react";

import "./Footer.scss";
import Others from "./Others";
import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <Others />
        <CopyRight />
      </div>
    </footer>
  );
}
