import React from "react";
import { Steps, Icon } from "antd";
import "../CreateEvent/Stages.css";

export default function Stages(props) {
  const { Step } = Steps;
  const { PFState, VFState, place } = props.stepsState;
  return (
    <div className="stages">
      <Steps>
        <Step status={PFState} title="Profile" icon={<Icon type="user" />} />
        <Step status={VFState} title="Verification" icon={<Icon type="solution" />} />
        <Step status={place} title="Place" icon={<Icon type="environment" />} />
      </Steps>
    </div>
  );
}
