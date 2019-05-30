import React from "react";
import "../../style/HostListEntry.css";
import { Rate } from "antd";

export default function HostListEntry(props) {
  const food = require("../../img/food.jpeg");
  const userImg = require("../../img/user.png");
  const { title, rate, classification } = props.data;

  console.log(props.data);
  return (
    <div id="Entry-box">
      <div id="Entry-img" style={{ background: "url(" + food + ")" }} />
      <div id="Entry-description">
        <div id="Entry-userImg" style={{ background: "url(" + userImg + ")" }} />
        <div id="Entry-description-hostArea/name">
          <h4>Hosted by Celine in Seoul</h4>
        </div>
        <div id="Entry-description-hostClassification">
          <h4>{classification}</h4>
        </div>
        <div id="Entry-description-hostTitle">
          <h4>{title}</h4>
        </div>
        <div id="Entry-description-hostRate">
          <Rate disabled allowHalf defaultValue={rate} />
        </div>
      </div>
    </div>
  );
}
