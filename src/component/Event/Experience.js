import React from "react";
import { Icon } from "antd";
import "./Experience.css";

export default function Experience(props) {
  const {} = props;

  return (
    <div id="Experience">
      <div className="box ex_iconBox">
        <div className="box ex_entry">
          <Icon className="ex_icon" type="bell" />
          <h3 className="ex_text">cccccccc</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="clock-circle" />
          <h3 className="ex_text">cccccccc</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="environment" />
          <h3 className="ex_text">cccccccc</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="team" />
          <h3 className="ex_text">cccccccc</h3>
        </div>
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
