import React from "react";
import "./Login.css";
import { Input, Drawer, Button } from "antd";
import fblogo from "../../../../img/fblogo.png";
import googlelogo from "../../../../img/googlelogo.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
const URL = process.env.REACT_APP_URL;

export default withRouter(
  class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Email: "",
        password: "",
        findResult: ""
      };
    }
    changeInput = (kind, value) => {
      var obj = {};
      obj[kind] = value;
      this.setState(obj);
    };
    submitLogin = () => {
      var flag = [];
      flag.push(this.checkEmpty("Email"));
      flag.push(this.checkEmpty("password"));
      if (!checkEmail(this.state.Email)) {
        document.getElementById("Emailwarning").style.display = "block";
        flag.push(false);
      }
      if (flag.includes(false)) return;
      axios.defaults.withCredentials = true;
      axios({
        method: "get",
        url: `${URL}/auth/login_process`,
        params: this.state,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(result => {
          if (result.data === "fail Login") {
            document.getElementById("fairLogin").style.display = "block";
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
      if (this.state[kind] === "") {
        document.getElementById(kind + "warning").style.display = "block";
        return false;
      } else {
        document.getElementById(kind + "warning").style.display = "none";
        return true;
      }
    };
    findpassword = () => {
      console.log(this.state.Email);
      axios.get(`${URL}/mail?email=${this.state.Email}`).then(result => {
        this.setState({
          findResult: result.data
        });
        document.getElementById("findResult").style.display = "inline";
      });
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
        <>
          <Drawer
            className={this.props.visible ? "login" : "login login-close"}
            placement="top"
            closable={true}
            onClose={this.props.onClick}
            visible={this.props.visible}
          >
            <div className="StandardModal__Content">
              <div className="top">
                <h3>Welcome back!</h3>
              </div>

              <a
                href={`${URL}/auth/facebook`}
                className="login-units"
                onClick={() => {
                  localStorage.setItem(
                    "backurl",
                    this.props.history.location.pathname +
                      this.props.history.location.search
                  );
                }}
              >
                <button className="sotialButton" style={fbStyle}>
                  <img
                    src={fblogo}
                    style={{ width: "20px", float: "left" }}
                    alt={"facebookLogo"}
                  />
                  Log in with Facebook
                </button>
              </a>
              <a
                href={`${URL}/auth/google`}
                className="login-units"
                onClick={() => {
                  localStorage.setItem(
                    "backurl",
                    this.props.history.location.pathname +
                      this.props.history.location.search
                  );
                }}
              >
                <button
                  className="sotialButton login-units"
                  style={googleStyle}
                >
                  <img
                    src={googlelogo}
                    style={{ width: "26px", float: "left", margin: "5px 0" }}
                    alt="googleLogo"
                  />
                  Log in with Google
                </button>
              </a>
              <hr className="login-units" />

              <div className="login-units">
                Your email *
                <Input
                  size="large"
                  placeholder="Email"
                  className="loginInput"
                  onChange={e => {
                    this.changeInput("Email", e.target.value);
                  }}
                />
              </div>

              <p className="warningmessage login-units" id="Emailwarning">
                Please confirm in your email
              </p>
              <p className="warningmessage login-units" id="fairLogin">
                Please check your ID and password again.
              </p>
              <div className="login-units">
                Password *
                <Input.Password
                  size="large"
                  placeholder="Password"
                  className="loginInput"
                  onChange={e => {
                    this.changeInput("password", e.target.value);
                  }}
                />
              </div>

              <p className="warningmessage login-units" id="passwordwarning">
                Please confirm in your password
              </p>

              <button
                className="sotialButton login-units"
                id="submit"
                style={submitStyle}
                onClick={this.submitLogin}
              >
                Login
              </button>

              <p className="forgotPassword login-units">
                <a
                  onClick={() => {
                    document.getElementById("findForm").style.display =
                      "inline";
                  }}
                  style={{ color: "#fd7854" }}
                >
                  {" "}
                  Forgot your password?
                </a>
              </p>
              <p id="findForm" style={{ display: "none" }}>
                <Input
                  size="large"
                  placeholder="Please your Email to find your password"
                  className="loginInput"
                  onChange={e => {
                    this.changeInput("Email", e.target.value);
                  }}
                  style={{ width: "80%" }}
                />
                <Button
                  style={{ marginLeft: "10px" }}
                  onClick={this.findpassword}
                >
                  find!
                </Button>
              </p>
              <p
                className="footer login-units"
                style={{ display: "none" }}
                id="findResult"
              >
                <br />
                {this.state.findResult}
              </p>
              <p
                className="footer login-units"
                style={{ justifyContent: "space-between" }}
              >
                Don't have an account?{" "}
                <a href="#" style={{ color: "#fd7854" }}>
                  Sign up now!
                </a>
              </p>
            </div>
          </Drawer>
        </>
      );
    }
  }
);
function checkEmail(str) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (regExp.test(str)) return true;
  else return false;
}
