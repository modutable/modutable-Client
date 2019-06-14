import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import "./Connect.css";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

export default withRouter(function Connect(props) {
  const { history } = props;

  const [data, setData] = useState({});

  useEffect(() => {
    const _getData = async () => {
      Axios.get(`${URL}/auth/myinfo`, {
        headers: { authorization: localStorage.getItem("token") }
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      });
    };

    _getData();
  }, []);

  const _logoutHandler = () => {
    localStorage.removeItem("token");
    props.history.go();
  };

  return (
    <>
      <div className="SideMenu-imgBox">
        <img
          src={data.profileImg}
          className="SideMenu-img"
          width="100px"
          height="100px"
          alt="profilePicture"
        />
      </div>
      <div className="SideMenu-Button">
        <h3>Hi! </h3>
        {data.firstName} {data.lastName}
      </div>
      <div>
        <Button onClick={() => {}} className="SideMenu-Button">
          My Account
        </Button>
      </div>
      <div>
        <Button
          className="SideMenu-Button"
          onClick={() => {
            history.push("/createEvent/profile");
          }}
        >
          Be Come Host
        </Button>
      </div>
      <div>
        <Button
          className="SideMenu-Button"
          style={{ backgroundColor: "rgb(242,160,119)", color: "white", fontWeight: "bold" }}
          onClick={_logoutHandler}
        >
          Logout
        </Button>
      </div>
    </>
  );
});
