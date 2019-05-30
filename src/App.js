import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/App.css";
import "antd/dist/antd.css";
import { Main, HostList } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/hostList" component={HostList} />
      </Router>
    );
  }
}

export default App;
