import React from "react";
import { Steps, Icon } from "antd";
import "./Stages.css";

export default function Stages(props) {
  const { Step } = Steps;
  const { PFState, VFState, photoState } = props.stepsState;

  console.log(PFState, VFState, photoState);
  return (
    <div className="stages">
      <Steps>
        <Step status={PFState} title="Profile" icon={<Icon type="user" />} />
        <Step status={VFState} title="Verification" icon={<Icon type="solution" />} />
        <Step status={photoState} title="Photo" icon={<Icon type="camera" />} />
      </Steps>
    </div>
  );
}
