import React from "react";
import { Button } from "antd";

export default function Connect(props) {
  console.log(props);
  return (
    <>
      <div className="SideMenu-Button">
        <img src="" width="50px" height="50px" />
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
        <Button className="SideMenu-Button" onClick={() => {}}>
          Be Come Host
        </Button>
      </div>
    </>
  );
}
