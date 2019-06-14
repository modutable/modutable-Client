import "./CreateEvent.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TabButton from "../component/common/header/TabButton";
import Stages from "../component/CreateEvent/stages/Stages";
import Profile from "../component/CreateEvent/Profile/Profile";
import { Button, Alert } from "antd";
import Description from "../component/CreateEvent/Description/Description";
import photo from "../component/CreateEvent/Photo/Photo";
import { connect } from "react-redux";
import { changeStep } from "../store/modules/createProfile";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    this.first = {
      step: "first",
      PFState: "process",
      VFState: "wait",
      photoState: "wait"
    };

    this.second = {
      step: "second",
      PFState: "finish",
      VFState: "process",
      photoState: "wait"
    };

    this.last = {
      step: "last",
      PFState: "finish",
      VFState: "finish",
      photoState: "process"
    };
  }

  _stepHandler = e => {
    if (e.target.id === "save") {
      if (this.props.step === "first") {
        if (this.props.address && this.props.phone) {
          this.props.changeStep(this.second);
          console.log(this.props.sendData);
          this.props.history.push("/createEvent/description");
        } else {
          this.setState({ toggle: true });
        }
      } else if (this.props.step === "second") {
        console.log(
          this.props.experience,
          this.props.guestMin,
          this.props.guestMax,
          this.props.title,
          this.props.deadline,
          this.props.openDate,
          this.props.description
        );
        if (
          this.props.experience &&
          this.props.guestMin &&
          this.props.guestMax &&
          this.props.title &&
          this.props.deadline &&
          this.props.openDate &&
          this.props.description
        ) {
          this.props.changeStep(this.last);
          console.log(this.props.sendData);
          this.props.history.push("/createEvent/photo");
        } else {
          console.log(this.props.sendData);

          this.setState({ toggle: true });
        }
      } else if (this.props.step === "last") {
        if (this.props.images.length !== 0) {
          console.log("마지막", this.props.sendData);
          let data = this.props.sendData;
          Axios.put(`${URL}/events`, data, {
            headers: { authorization: localStorage.getItem("token") }
          })
            .then(res => {
              console.log(111111111111, res.data);
              this.props.changeStep(this.first);
              this.props.history.push("/");
            })
            .catch(error => {
              console.log(error);
            });
        } else {
        }
      }
    } else {
      if (this.props.step === "second") {
        this.props.changeStep(this.first);
        console.log(this.props.sendData);
        this.props.history.goBack();
      } else {
        this.props.changeStep(this.second);
        this.props.history.goBack();
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
          <Stages stepsState={this.props} />
          <Switch>
            <Route path="/createEvent/profile" component={Profile} />
            <Route path="/createEvent/description" component={Description} />
            <Route path="/createEvent/photo" component={photo} />
          </Switch>
          <div>
            <Alert
              message="Phone number & Address Must fill"
              type="error"
              showIcon
              style={this.state.toggle ? { display: "block" } : { display: "none" }}
            />
          </div>
          <div className="CreateEvent-saveBox">
            {console.log("step >>>>>", this.props.step)}
            <Button
              id="prev"
              style={{ display: this.props.step === "first" ? "none" : "block" }}
              className="CreateEvent-button"
              onClick={this._stepHandler}
            >
              Prev
            </Button>
            <Button id="save" className="CreateEvent-button" onClick={this._stepHandler}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ createProfile, createDescription }) => ({
  PFState: createProfile.PFState,
  VFState: createProfile.VFState,
  photoState: createProfile.photoState,
  step: createProfile.step,
  phone: createProfile.phone,
  address: createProfile.address,
  experience: createDescription.experience,
  guestMin: createDescription.guestMin,
  guestMax: createDescription.guestMax,
  title: createDescription.title,
  description: createDescription.description,
  openDate: createDescription.openDate,
  deadline: createDescription.deadline,
  images: createDescription.images,
  preparefoods: createDescription.preparefoods,
  sendData: Object.assign(createProfile, createDescription)
});

// props 로 넣어줄 액션 생성함
const mapDispatchToProps = dispatch => ({
  changeStep: data => dispatch(changeStep(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
