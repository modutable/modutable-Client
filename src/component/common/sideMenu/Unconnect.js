import React from "react";
import { Button } from "antd";

export default function Unconnect(props) {
  const { sideMenuClose, loginOnClick, signUpOnClick } = props;

  return (
    <>
      <div>
        <Button
          onClick={() => {
            sideMenuClose();
            loginOnClick();
          }}
          className="SideMenu-Button"
        >
          Log in
        </Button>
      </div>
      <div>
        <Button
          className="SideMenu-Button"
          onClick={() => {
            sideMenuClose();
            signUpOnClick();
          }}
        >
          {" "}
          Sign up
        </Button>
      </div>
    </>
  );
}
