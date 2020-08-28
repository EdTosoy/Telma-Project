import React from "react";

import Deposit from "./deposit.svg";
import Loan from "./loan.svg";
import Transfer from "./transfer.svg";
import Banking from "./banking.svg";
import "./ServicesRight.scss";

export default function ServicesRight() {
  const figureDivs = [
    {
      id: 1,
      name: "Deposit",
      src: Deposit,
    },
    {
      id: 2,
      name: "Net Bankin",
      src: Banking,
    },
    {
      id: 3,
      name: "Fast laon",
      src: Loan,
    },
    {
      id: 4,
      name: "Fund Transfer",
      src: Transfer,
    },
  ];
  return (
    <div className="right">
      <figure>
        {figureDivs.map((figureDiv) => (
          <div key={figureDiv.id}>
            <div className="icon-wrapper">
              <img src={figureDiv.src} alt="icon" />
            </div>
            <p>{figureDiv.name}</p>
          </div>
        ))}
      </figure>
    </div>
  );
}
