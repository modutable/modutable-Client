import React from "react";
import { withRouter } from "react-router-dom";

import TabButton from "./TabButton";
import "./Header.css";
import AutoInput from "./AutoInput";

export default withRouter(function Header(props) {
  return (
    <>
      <div id="HostList-header">
        <div
          id="HostList-logoBox"
          className="HostList-header-unit"
          onClick={() => {
            props.history.push("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <div id="HostList-header-img" />
        </div>
        <div id="HostList-SearchBox" className="HostList-header-unit">
          <div id="HostList-SearchSize">
            <AutoInput />
          </div>
        </div>
        <div id="HostList-tapBox" className="HostList-header-unit">
          <TabButton />
        </div>
      </div>
    </>
  );
});
