import React from "react";
import { withRouter } from "react-router-dom";
import { Row } from "antd";
import "./MainTop.css";
import TabButton from "../common/header/TabButton";

export default withRouter(function MainTop(props) {
  return (
    <>
      <Row id="Top-header">
        <div
          id="Top-logo"
          onClick={() => {
            props.history.push("/");
          }}
          style={{ cursor: "pointer" }}
        />
        <TabButton />
      </Row>

      <Row id="Top-bottom">
        <h1>Book unforgettable culinary experiences</h1>
        <h2>Join dining experiences, cooking classes and food tours in 130+ countries</h2>
      </Row>
    </>
  );
});
