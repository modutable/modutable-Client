import React from "react";
import { Steps, Icon } from "antd";
import "../CreateEvent/Stages.css";

export default function Stages(props) {
  const { Step } = Steps;
  const { PFState, VFState, photo } = props.stepsState;

  console.log(PFState, VFState, photo);
  return (
    <div className="stages">
      <Steps>
        <Step status={PFState} title="Profile" icon={<Icon type="user" />} />
        <Step status={VFState} title="Verification" icon={<Icon type="solution" />} />
        <Step status={photo} title="Photo" icon={<Icon type="camera" />} />
      </Steps>
    </div>
  );
}
