import React, { useState, useEffect } from "react";
import { Row } from "antd";
import "./MainTop.css";
import TabButton from "../common/TabButton";

export default function MainTop() {
  return (
    <>
      <Row id="Top-header">
        <div id="Top-logo" />
        <TabButton />
      </Row>

      <Row id="Top-bottom">
        <h1>Book unforgettable culinary experiences</h1>
        <h2>Join dining experiences, cooking classes and food tours in 130+ countries</h2>
      </Row>
    </>
  );
}
