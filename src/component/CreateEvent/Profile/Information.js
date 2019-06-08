import React, { useState } from "react";
import "./Information.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { Place } from "../../Event";
import AutoInput from "../../common/header/AutoInput";

export default function Information() {
  const [query, setQuery] = useState("");

  const _queryHandler = address => {
    console.log(address);
    setQuery(address);
  };

  return (
    <div className="Information">
      <div className="Information-box">
        <h1>Information</h1>
        <h3>Eatwith is all about people! Help future guests get to know you.</h3>
      </div>
      <p />
      <div className="Information-box">
        <h3 style={{ fontWeight: "bold" }}>Phone Number</h3>
        <IntlTelInput containerClassName="intl-tel-input" inputClassName="form-control" />
      </div>
      <p />
      <div>
        <h3 style={{ fontWeight: "bold" }}>Place & Amenities</h3>
        <AutoInput onChange={_queryHandler} />
        <p />
        {/* <Place query={query} /> */}
      </div>
    </div>
  );
}
