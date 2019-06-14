import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Events, Event, Account, CreateEvent } from "./pages";
import GetSocialToken from "./component/common/sideMenu/login/GetSocialToken";
import changeUserData from "../src/store/modules/joinUser";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

function App(props) {
  const { changeUserData } = props;

  useEffect(() => {
    const _getData = () => {
      Axios.get(`${URL}/auth/myinfo`).then(res => {
        console.log(changeUserData);
        changeUserData(res.data);
      });
    };

    _getData();
  }, [changeUserData]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sotialTokenQuery" component={GetSocialToken} />
        <Route path="/search" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/account" component={Account} />
        <Route path="/createEvent" component={CreateEvent} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeUserData: data => dispatch(changeUserData(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
