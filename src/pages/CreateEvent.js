import "./CreateEvent.css";
import React, { Component } from "react";
import TabButton from "../component/common/header/TabButton";
import Stages from "../component/CreateEvent/Stages";
import Profile from "../component/CreateEvent/Profile/Profile";
import { Button } from "antd";
import Description from "../component/CreateEvent/Description/Description";
import EventPlace from "../component/CreateEvent/EventPlace/EventPlace";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: "first",
      PFState: "process",
      VFState: "wait",
      place: "wait"
    };
    this.first = {
      steps: "first",
      PFState: "process",
      VFState: "wait",
      place: "wait"
    };
    this.second = {
      steps: "second",
      PFState: "finish",
      VFState: "process",
      place: "wait"
    };
    this.last = {
      steps: "last",
      PFState: "finish",
      VFState: "finish",
      place: "process"
    };
  }

  _stepHandler = e => {
    if (e.target.id === "Save") {
      if (this.state.steps === "first") {
        this.setState(this.second);
      } else {
        this.setState(this.last);
      }
    } else {
      if (this.state.steps === "second") {
        this.setState(this.first);
      } else {
        this.setState(this.second);
      }
    }
  };

  render() {
    return (
      <div className="CreateEvent">
        <div className="CreateEvent-header">
          <div className="CreateEvent-logoBox">
            <img className="CreateEvent-logo" src={require("../img/blackLogo.png")} alt={"logo"} />
          </div>
          <div className="CreateEvent-buttonBox">
            <TabButton />
          </div>
        </div>
        <div id="CreateEvent-body">
          <Stages stepsState={this.state} />

          {(() => {
            if (this.state.steps === "first") return <Profile />;
            if (this.state.steps === "second") return <Description />;
            if (this.state.steps === "last") return <EventPlace />;
          })()}

          <div className="CreateEvent-saveBox">
            <Button
              id="Prev"
              style={{ display: this.state.steps !== "first" ? "block" : "none" }}
              className="CreateEvent-button"
              onClick={this._stepHandler}
            >
              Prev
            </Button>
            <Button id="Save" className="CreateEvent-button" onClick={this._stepHandler}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
