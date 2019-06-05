import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import "./SideMenu.css";
import Login from "../common/login/Login";
import SignUp from "../common/signUp/SignUp";

export default function SideMenu(props) {
  const { visible, onClick } = props;

  const [loginVisible, setLoginVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  const _loginOnClick = () => {
    loginVisible ? setLoginVisible(false) : setLoginVisible(true);
  };
  const _signUpOnClick = () => {
    signUpVisible ? setSignUpVisible(false) : setSignUpVisible(true);
  };

  return (
    <>
      {console.log(signUpVisible)}
      <Drawer title={<div />} placement="right" onClose={onClick} visible={visible}>
        <div>
          <Button
            onClick={() => {
              _loginOnClick();
              onClick();
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
              _signUpOnClick();
              onClick();
            }}
          >
            {" "}
            Sign up
          </Button>
        </div>
      </Drawer>
      <Login onClick={_loginOnClick} visible={loginVisible} />
      <SignUp onClick={_signUpOnClick} visible={signUpVisible} />
    </>
  );
}
