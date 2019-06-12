import React from "react";
import Uploader from "../../common/uploader/Uploader";

export default function Photo(props) {
  return (
    <div className="container">
      <h1>Photo</h1>
      <h3>Please upload photos related to your experience.</h3>
      <Uploader link={"http://localhost:5000"} />
    </div>
  );
}
