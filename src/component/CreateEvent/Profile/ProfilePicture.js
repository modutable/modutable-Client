import React, { useState, useEffect } from "react";
import "./ProfilePicture.css";
import Uploader from "../../common/uploader/Uploader";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;
const LAMDAURL = process.env.REACT_APP_LAMDAURL;

export default function ProfilePicture() {
  const [data, setData] = useState({});

  useEffect(() => {
    const _getData = () => {
      Axios.get(`${URL}/auth/myinfo`, {
        headers: { authorization: localStorage.getItem("token") }
      }).then(res => {
        setData(res.data);
      });
    };

    _getData();
  }, []);

  console.log(LAMDAURL);
  return (
    <div className="ProfilePicture">
      <div className="ProfilePicture-textBox">
        <h1>Profile Picture</h1>
        <h3>Don't forget a smile is the best way to introduce yourself to others.</h3>
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <img src={data.profileImg} className="ProfilePicture-img" alt="profile" />
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <Uploader link={LAMDAURL} flag="profile" />
      </div>
    </div>
  );
}
