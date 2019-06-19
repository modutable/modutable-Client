import React, { useEffect } from "react";
import Header from "../component/common/header/Header";
import "./Account.css";
import Tap from "../component/account/tab/Tab";
import { message } from "antd";

export default function Account(props) {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      message.error("Please login first", [1.5], () => {
        props.history.goBack();
      });
    }
  }, [props.history]);

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
