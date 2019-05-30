import React from "react";
import { Drawer } from "antd";

export default function SideMenu(props) {
  console.log(props.toggle);
  return (
    <Drawer title={<div />} placement="right" onClose={props.onClick} visible={props.toggle}>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Drawer>
  );
}
