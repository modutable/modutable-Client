import React from "react";
import { Checkbox, Button } from "antd";
import "./JoinBar.css";

export default function JoinHostBar() {
  return (
    <div className="box JoinHostBar-container">
      <div id="JoinHostBar-check" style={{ margin: "auto" }}>
        <Checkbox className="JoinHostBar-checkBox" onChange={""}>
          Checkbox
        </Checkbox>
        <Checkbox className="JoinHostBar-checkBox" onChange={""}>
          Checkbox
        </Checkbox>
        <Checkbox className="JoinHostBar-checkBox" onChange={""}>
          Checkbox
        </Checkbox>
        <Checkbox className="JoinHostBar-checkBox" onChange={""}>
          Checkbox
        </Checkbox>
      </div>
      <div id="JoinHostBar-buttonBox">
        <Button id="JoinHostBar-button">Join</Button>
      </div>
    </div>
  );
}
