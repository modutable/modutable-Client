import React, { useState } from "react";
import { Row } from "antd";
import "../../../style/MainViewTop.css";
import TabButton from "../../common/TabButton";

export default function MainViewTop() {
  const [modalVisible, setModalVisible] = useState(false);

  const _onClick = e => {
    console.log("여기");
    modalVisible ? setModalVisible(false) : setModalVisible(true);
  };

  return (
    <>
      <Row id="Top-header">
        <div id="Top-logo" />
        <TabButton onClick={_onClick} toggle={modalVisible} />
      </Row>

      <Row id="Top-bottom">
        <h1>Book unforgettable culinary experiences</h1>
        <h2>Join dining experiences, cooking classes and food tours in 130+ countries</h2>
      </Row>
    </>
  );
}
