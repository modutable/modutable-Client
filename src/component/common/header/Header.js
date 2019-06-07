import React, { useState } from "react";
import { Input } from "antd";
import TabButton from "./TabButton";
import "./Header.css";
import AutoInput from "./AutoInput";

export default function Header() {
  return (
    <>
      <div id="HostList-header">
        <div id="HostList-logoBox" className="HostList-header-unit" span={6}>
          <div id="HostList-header-img" />
        </div>
        <div id="HostList-SearchBox" className="HostList-header-unit" span={12}>
          <div id="HostList-SearchSize">
            <AutoInput />
          </div>
        </div>
        <div id="HostList-tapBox" className="HostList-header-unit" span={6}>
          <TabButton />
        </div>
      </div>
    </>
  );
}
