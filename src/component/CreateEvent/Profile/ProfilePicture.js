import React from "react";
import "./ProfilePicture.css";
import Uploader from "../../common/uploader/Uploader";

export default function ProfilePicture() {
  return (
    <div className="ProfilePicture">
      <div className="ProfilePicture-textBox">
        <h1>Profile Picture</h1>
        <h3>Don't forget a smile is the best way to introduce yourself to others.</h3>
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <img src="" className="ProfilePicture-img" />
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <Uploader link={"https://www.mocky.io/v2/5cc8019d300000980a055e76"} />
      </div>
    </div>
  );
}
