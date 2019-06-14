import React from "react";
import Uploader from "../../common/uploader/Uploader";
const LAMDAURL = process.env.REACT_APP_LAMDAURL;

export default function Photo(props) {
  return (
    <div className="container">
      <h1>Photo</h1>
      <h3>Please upload photos related to your experience.</h3>
      <Uploader link={LAMDAURL} flag="event" />
    </div>
  );
}
