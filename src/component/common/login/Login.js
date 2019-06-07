import React from "react";
import "./Login.css";
import { Input, Drawer } from "antd";
import fblogo from "../../../img/fblogo.png";
import googlelogo from "../../../img/googlelogo.png";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: ""
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
      url: "http://localhost:3001/auth/login_process",
      params: this.state,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(result => {
        /* 모달끄기 */
        console.log(result.data);
        if (result.data === "fail Login") {
          document.getElementById("fairLogin").style.display = "block";
        } else {
          localStorage.setItem("token", result.data);
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
              href="http://localhost:3001/auth/facebook"
              className="login-units"
            >
              <button className="sotialButton" style={fbStyle}>
                <img src={fblogo} style={{ width: "20px", float: "left" }} />
                Log in with Facebook
              </button>
            </a>
            <a href="http://localhost:3001/auth/google" className="login-units">
              <button className="sotialButton login-units" style={googleStyle}>
                <img
                  src={googlelogo}
                  style={{ width: "26px", float: "left", margin: "5px 0" }}
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
              <a href="#" style={{ color: "#fd7854" }}>
                {" "}
                Forgot your password?
              </a>
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
function checkEmail(str) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (regExp.test(str)) return true;
  else return false;
}
