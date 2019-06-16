import React from "react";
import "./Description.css";
import Experience from "./Experience/Experience";
import DatePick from "./Date/DatePick";

export default function Description(props) {
  return (
    <div>
      <Experience />
      <DatePick />
    </div>
  );
}
