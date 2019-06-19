import React from "react";
import { withRouter } from "react-router-dom";
import "./EventListEntry.css";
import { Rate } from "antd";

export default withRouter(function EventListEntry(props) {
  const { id, title, profile, images, reviewRating, mealsType, userName, address } = props.data;

  const _onClick = () => {
    props.history.push("/event/" + id);
  };

  return (
    <div id="Entry-box" onClick={_onClick}>
      <img id="Entry-img" src={images} alt="event title" />
      <div id="Entry-description">
        <img id="Entry-userImg" src={profile} alt="profile" />
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
          <h3 className="Entry-unit Entry_title">{title}</h3>
        </div>
        <div className="Entry-units">
          <Rate className="Entry-unit" disabled allowHalf defaultValue={reviewRating} />
        </div>
      </div>
    </div>
  );
});
