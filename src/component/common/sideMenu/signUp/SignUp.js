import React from "react";
import "./SignUp.css";
import { Input, Row, Col, Modal } from "antd";
import "antd/dist/antd.css";
import fblogo from "../../../../img/fblogo.png";
import googlelogo from "../../../../img/googlelogo.png";
import BirthdayInput from "./BirthdayInput";
import axios from "axios";
import AutoInput from "../../header/AutoInput";
import { withRouter } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export default withRouter(
  class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.firstName = "";
      this.lastName = "";
      this.city = "";
      this.Email = "";
      this.password = "";
      this.day = 1;
      this.month = 1;
      this.year = 1900;
      this.boxCheck = false;
    }
    submitSignUp = () => {
      var flag = [];
      console.log(this.props);
      document.getElementById("Emailalreadywarning").style.display = "none";
      flag.push(this.checkEmpty("firstName"));
      flag.push(this.checkEmpty("lastName"));
      flag.push(this.checkEmpty("city"));
      flag.push(this.checkEmpty("Email"));
      flag.push(this.checkEmpty("password"));
      if (!checkEmail(this.Email)) {
        document.getElementById("Emailwarning").style.display = "block";
        flag.push(false);
      }
      if (flag.includes(false)) return;
      var obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        city: this.city,
        Email: this.Email,
        password: this.password,
        day: this.day,
        month: this.month,
        year: this.year,
        boxCheck: this.boxCheck
      };
      axios
        .post(`${URL}/auth/signUp`, obj, {
          headers: { "Content-Type": "application/json" }
        })
        .then(result => {
          if (result.data.message === "already") {
            document.getElementById("Emailalreadywarning").style.display =
              "block";
          } else {
            localStorage.setItem("token", result.data);
            this.props.history.go();
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    checkEmpty = kind => {
      if (this[kind] === "") {
        document.getElementById(kind + "warning").style.display = "block";
        return false;
      } else {
        document.getElementById(kind + "warning").style.display = "none";
        return true;
      }
    };
    changeInput = value => {
      this.city = value;
    };
    render() {
      const fbStyle = {
        background: "rgb(72,103,173)"
      };
      const googleStyle = {
        background: "rgb(78,133,236)",
        marginBottom: "10px"
      };
      const submitStyle = {
        background: "rgb(109,209,134)",
        margin: "16px 0",
        color: "white"
      };
      return (
        <Modal
          visible={this.props.visible}
          onCancel={() => {
            this.props.onClick();
          }}
          width={"80%"}
          footer={null}
        >
          <div className="StandardModal__Content">
            <div className="login-body">
              <div className="top">
                <h3>Join Eatwith</h3>
              </div>
              <a href={`${URL}/auth/facebook`} className="login-units">
                <button className="sotialButton" style={fbStyle}>
                  <img
                    src={fblogo}
                    style={{ width: "20px", float: "left" }}
                    alt="FBLogo"
                  />
                  Sign up with Facebook
                </button>
              </a>
              <a href={`${URL}/auth/google`} className="login-units">
                <button className="sotialButton" style={googleStyle}>
                  <img
                    src={googlelogo}
                    style={{ width: "26px", float: "left", margin: "5px 0" }}
                    alt="GoogleLogo"
                  />
                  Sign up with Google
                </button>
              </a>
              <hr />
              <div>
                Complete your profile *
                <Input
                  size="large"
                  className="loginInput"
                  placeholder="First name"
                  onChange={e => {
                    this.firstName = e.target.value;
                  }}
                />
                <p className="warningmessage" id="firstNamewarning">
                  Please fill in your first name
                </p>
                <Input
                  size="large"
                  className="loginInput"
                  placeholder="Last name"
                  onChange={e => {
                    this.lastName = e.target.value;
                  }}
                />
                <p className="warningmessage" id="lastNamewarning">
                  Please fill in your last name
                </p>
                <AutoInput
                  flag="signUp"
                  size="large"
                  className="loginInput"
                  placeholder="Your city"
                  onChange={this.changeInput}
                />
                <p className="warningmessage" id="citywarning">
                  Please fill in you city
                </p>
                <hr />
                <Input
                  size="large"
                  className="loginInput"
                  placeholder="Email"
                  onChange={e => {
                    this.Email = e.target.value;
                  }}
                />
                <p className="warningmessage" id="Emailwarning">
                  Please confirm in your email
                </p>
                <p className="warningmessage" id="Emailalreadywarning">
                  This email is already Signed
                </p>
                <Input.Password
                  size="large"
                  className="loginInput"
                  placeholder="Password"
                  onChange={e => {
                    this.password = e.target.value;
                  }}
                />
                <p className="warningmessage" id="passwordwarning">
                  Please fill in your password
                </p>
              </div>
              <div />
              <hr />
              <h5>Birthday</h5>
              <p className="birthDay-treat">
                Don't forget to sign up for the newsletter to receive a surprise
                treat!
              </p>
              <div className="BirthDateInput">
                <Row>
                  <Col span={8}>
                    <BirthdayInput
                      kind="Day"
                      selectDate={(kind, value) => {
                        this.day = value;
                      }}
                    />
                  </Col>
                  <Col span={8}>
                    <BirthdayInput
                      kind="Month"
                      selectDate={(kind, value) => {
                        this.month = value;
                      }}
                    />
                  </Col>
                  <Col span={8}>
                    <BirthdayInput
                      kind="Year"
                      selectDate={(kind, value) => {
                        this.year = value;
                      }}
                    />
                  </Col>
                </Row>
              </div>
              <div className="inboxGroup">
                <label>
                  <input
                    type="checkbox"
                    style={{ position: "absolute", margin: "4px 0 0 -20px" }}
                    onChange={e => {
                      this.boxCheck = e.target.checked;
                    }}
                  />{" "}
                  Yes! I want to receive exclusive Eatwith offers, travel inspo
                  and alo of the food in my inbox 😋
                </label>
              </div>
              <button
                className="sotialButton"
                id="submit"
                style={submitStyle}
                onClick={this.submitSignUp}
              >
                Let's go!
              </button>
              <span
                style={{
                  fontSize: "14px",
                  color: "#8f8e87",
                  fontWeight: "400"
                }}
              >
                By signing ip, I agree to Eatwith's Terms & Conditions, Trust
                and Privacy Policy
              </span>
              <p className="footer">
                Already have an account?{" "}
                <a href="#" style={{ color: "#fd7854", marginLeft: "10px" }}>
                  Log in now
                </a>
              </p>
              <p
                style={{
                  color: "#8f8e87",
                  fontSize: "11px",
                  lineHeight: "1.1"
                }}
              >
                <span>
                  The collected data is used by Vizeat Ltd in order to process
                  your account creation, manage your bookings, personalize your
                  online experience and for marketing purposes should you have
                  given your consent. In accordance with the General Data
                  Protection Rules 2018 regarding personal data protection and
                  the Eatwith Privacy Policy, you have the right to access,
                  rectify or ask for the deletion of your data by writing to
                  'jiy8319@gmail.com'
                </span>
              </p>
            </div>
          </div>
        </Modal>
      );
    }
  }
);
function checkEmail(str) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (regExp.test(str)) return true;
  else return false;
}
