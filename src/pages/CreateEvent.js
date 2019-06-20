import "./CreateEvent.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TabButton from "../component/common/header/TabButton";
import Stages from "../component/createEvent/stages/Stages";
import Profile from "../component/createEvent/profile/Profile";
import { Button, Alert, message } from "antd";
import Description from "../component/createEvent/description/Description";
import photo from "../component/createEvent/photo/Photo";
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
          this.setState({ toggle: false });
          this.props.changeStep(this.second);
          this.props.history.push("/createEvent/description");
        } else {
          this.setState({ toggle: true });
        }
      } else if (this.props.step === "second") {
        this.setState({ toggle: false });

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
          this.props.history.push("/createEvent/photo");
        } else {
          this.setState({ toggle: true });
        }
      } else if (this.props.step === "last") {
        this.setState({ toggle: false });

        if (this.props.images.length >= 3) {
          let data = this.props.sendData;
          Axios.put(`${URL}/events`, data, {
            headers: { authorization: localStorage.getItem("token") }
          })
            .then(res => {
              this.props.changeStep(this.first);
              this.props.history.push("/");
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          message.error("More than 3 photos should be uploaded.");
          this.setState({ toggle: true });
        }
      }
    } else {
      if (this.props.step === "second") {
        this.props.changeStep(this.first);
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
          <div
            className="CreateEvent-logoBox"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
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
