import React, { Component } from "react";
import queryString from "query-string";

export default class App2 extends Component {
  render() {
    var { search } = this.props.location;
    const values = queryString.parse(search);
    localStorage.setItem("token", values.token);
    this.props.history.goBack();
    return <div />;
  }
}
