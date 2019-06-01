import React from "react";
import { Icon } from "antd";
import "../../style/Experience.css";

export default function Experience() {
  const iconType = ["clock-circle", "environment", "bell", "team"];

  return (
    <div id="Experience">
      <div className="box ex_iconBox">
        {iconType.map((entry, i) => {
          return (
            <div className="box ex_entry" key={entry + 1}>
              <Icon className="ex_icon" key={entry + 2} type={entry} style={{ color: "#F28058" }} />
              <h3 className="ex_text" key={entry + 3}>
                cccccccc
              </h3>
            </div>
          );
        })}
      </div>
      <div id="ex_description">
        <h3 id="ex_description_title">A WORD ABOUT THE EXPERIENCE</h3>
        <div id="ex_description_value">
          asdfadsf
          <br />
          asdfasdfas
          <br />
          <hr />
          asdfasdfas
          <br />
        </div>
      </div>
    </div>
  );
}
