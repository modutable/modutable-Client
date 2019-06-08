import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";

export default withRouter(function Connect(props) {
  const { history } = props;
  return (
    <>
      <div className="SideMenu-Button">
        <img src="" width="50px" height="50px" alt="profilePicture" />
      </div>
      <div className="SideMenu-Button">
        <h3>Hi! </h3>
        {"김종욱님"}
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
            history.push("/CreateEvent");
          }}
        >
          Be Come Host
        </Button>
      </div>
    </>
  );
});
