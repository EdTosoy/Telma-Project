import React from "react";

import "./RemitStatus.scss";

export default function RemitStatusPage() {
  return (
    <section className="remit-status">
      <div className="remit-status-content">
        <div className="left">
          <h1>Remit Status Inquiry</h1>
          <h3>Know the status of your remittance now!</h3>
        </div>
        <div className="right">
          <p>
            Simply enter the complete reference number including alphabet or
            special characters (if any) provided by our BDO Remit office,
            remittance partners or your remitter.
          </p>
          <form>
            <label>Reference Number :</label>
            <input type="text" name="ref-number" required="true" />
            <button>Submit</button>
          </form>
        </div>
        <div className="note">
          Note: The use of this inquiry system only includes remittance
          transaction made through BDO Remit offices and our remittance
          partners. No other use may be made of the system and information
          without BDO's prior consent.
        </div>
      </div>
    </section>
  );
}
