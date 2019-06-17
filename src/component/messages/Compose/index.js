import React, { Component } from "react";
import "./Compose.css";

export default class Compose extends Component {
  render() {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          onKeyPress={e => {
            this.props.sendMessage(e, e.target.value);
          }}
        />
      </div>
    );
  }
}
