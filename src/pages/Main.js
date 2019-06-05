import React from "react";
import { Row } from "antd";
import "./Main.css";
import MainTop from "../component/main/MainTop";
import MainBottom from "../component/main/MainBottom";

export default function Main() {
  return (
    <>
      <Row id="MainView-top">
        <MainTop />
      </Row>
      <Row id="MainView-bottom">
        <MainBottom />
      </Row>
    </>
  );
}
