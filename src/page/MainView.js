import React from "react";
import { Row } from "antd";
import "../style/MainView.css";
import MainViewTop from "../component/mainView/top/MainViewTop";
import MainViewBottom from "../component/mainView/bottom/MainViewBottom";

export default function MainView() {
  return (
    <>
      <Row id="MainView-top">
        <MainViewTop />
      </Row>
      <Row id="MainView-bottom">
        <MainViewBottom />
      </Row>
    </>
  );
}
