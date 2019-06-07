import React, { useState } from "react";
import { Drawer } from "antd";
import "./SideMenu.css";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Connect from "./Connect";
import Unconnect from "./Unconnect";

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

  localStorage.setItem("token", 123);

  console.log("111", Boolean(localStorage.getItem("token")));

  return (
    <>
      {console.log(signUpVisible)}
      <Drawer title={<div />} placement="right" onClose={onClick} visible={visible}>
        {localStorage.getItem("token") ? (
          <Connect />
        ) : (
          <Unconnect
            sideMenuClose={onClick}
            loginOnClick={_loginOnClick}
            signUpOnClick={_signUpOnClick}
          />
        )}
      </Drawer>
      <Login onClick={_loginOnClick} visible={loginVisible} />
      <SignUp onClick={_signUpOnClick} visible={signUpVisible} />
    </>
  );
}
