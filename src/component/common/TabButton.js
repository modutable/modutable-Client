import React from "react";
import SideMenu from "../common/SideMenu";

export default function TabButton(props) {
  const { onClick, toggle } = props;
  return (
    <>
      <div id="Top-tapMenu" onClick={props.onClick}>
        <div className="tap" />
        <div className="tap" />
        <div className="tap" />
      </div>
      <SideMenu onClick={onClick} toggle={toggle} />
    </>
  );
}
