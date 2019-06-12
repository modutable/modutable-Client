import React from "react";
import { withRouter } from "react-router-dom";
import "./EventListEntry.css";
import { Rate } from "antd";

export default withRouter(function EventListEntry(props) {
  const food = require("../../img/food.jpeg");
  const { id, title, profile, reviewRating, mealsType, userName, address } = props.data;

  console.log(props);

  const _onClick = () => {
    props.history.push("/event/" + id);
  };

  return (
    <div id="Entry-box" onClick={_onClick}>
      <div id="Entry-img" style={{ background: "url(" + food + ")" }} />
      <div id="Entry-description">
        <div id="Entry-userImg" style={{ background: "url(" + profile + ")" }} />
        <div className="Entry-units">
          <h3 className="Entry-unit">
            Hosted by<span style={{ color: "#F28058", fontWeight: "bold" }}> {userName} </span> in{" "}
            {address}
          </h3>
        </div>
        <div className="Entry-units">
          <h3 className="Entry-unit" style={{ backgroundColor: "#F6F6F6", width: "20%" }}>
            {mealsType}
          </h3>
        </div>
        <div className="Entry-units">
          <h3 className="Entry-unit">{title}</h3>
        </div>
        <div className="Entry-units">
          <Rate className="Entry-unit" disabled allowHalf defaultValue={reviewRating} />
        </div>
      </div>
    </div>
  );
});
