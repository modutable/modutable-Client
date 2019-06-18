import React, { Component } from "react";
import { Row, Input, Button } from "antd";
import MainTop from "../component/main/MainTop";
import queryString from "query-string";
import axios from "axios";
const URL = process.env.REACT_APP_URL;
export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    const { email } = queryString.parse(this.props.history.location.search);
    this.setState({
      email
    });
  }
  click = () => {
    axios.post(`${URL}/auth/password`, this.state).then(result => {
      console.log(result);
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div>
        <Row id="MainView-top">
          <MainTop />
        </Row>
        <Row id="MainView-bottom">
          <div style={{ margin: "20px 30%" }}>
            You can change your Password. Please fill your new Password in Box.
            <Input.Password
              placeholder="input password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
            <Button
              type="primary"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={this.click}
            >
              Change!
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}
