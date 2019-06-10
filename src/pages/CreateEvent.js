import "./CreateEvent.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabButton from "../component/common/header/TabButton";
import Stages from "../component/CreateEvent/Stages";
import Profile from "../component/CreateEvent/Profile/Profile";
import { Button, Alert } from "antd";
import Description from "../component/CreateEvent/Description/Description";
import EventPlace from "../component/CreateEvent/EventPlace/EventPlace";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      phone: null,
      address: null,
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

          <Router>
            <Switch>
              <Route path="/createEvent/profile" component={Profile} />
              <Route path="/createEvent/description" component={Description} />
              <Route path="/createEvent/eventPlace" component={EventPlace} />
            </Switch>
          </Router>

          <div>
            <Alert
              message="Phone number & Address Must fill"
              type="error"
              showIcon
              style={{ display: this.state.show }}
            />
          </div>
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
