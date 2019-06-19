import React, { Component } from "react";
import { Input, Button, Rate } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const { TextArea } = Input;
const URL = process.env.REACT_APP_URL;
export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3.5,
      comment: "",
      eventId: ""
    };
  }

  componentDidMount = () => {
    this.setState({ eventId: this.props.eventId });
  };

  rateChange = score => {
    this.setState({
      score
    });
  };
  register = () => {
    axios
      .post(`${URL}/events/reviews/${this.props.eventId}`, this.state, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(res => {
        this.props.onClose(false);
      });
  };
  render() {
    return (
      <div style={{ margin: "0px 50px" }}>
        <h1>Review</h1> <Rate allowHalf defaultValue={2.5} onChange={this.rateChange} />
        <TextArea
          rows={4}
          style={{
            borderRadius: "10px",
            borderColor: "rgb(170,170,170)"
          }}
          onChange={e => {
            this.setState({ comment: e.target.value });
          }}
        />
        <Button
          type="primary"
          block
          style={{ marginTop: "10px", borderRadius: "10px" }}
          onClick={this.register}
        >
          Register My review
        </Button>
      </div>
    );
  }
}
