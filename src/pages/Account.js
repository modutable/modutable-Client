import React from "react";
import Header from "../component/common/header/Header";
import "./Account.css";
import Tap from "../component/account/tab/Tab";

export default function Account() {
  return (
    <div className="account_container">
      <Header />
      <div className="account_body">
        <div className="account_content">
          <Tap />
        </div>
      </div>
    </div>
  );
}
