import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Main, Events, Event, Account, CreateEvent, Password } from "./pages";
import GetSocialToken from "./component/common/sideMenu/login/GetSocialToken";
import { changeUserData } from "./store/modules/joinUser";
import Axios from "axios";
import { connectSocket } from "./component/common/socket";

const URL = process.env.REACT_APP_URL;

function App(props) {
  const { changeUserData } = props;

  useEffect(() => {
    const _getData = async () => {
      const userData = await Axios.get(`${URL}/auth/myinfo`, {
        headers: { authorization: localStorage.getItem("token") }
      });
      connectSocket();
      changeUserData(userData.data);
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
        <Route path="/password" component={Password} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = () => ({});
// props 로 넣어줄 액션 생성함
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeUserData: data => dispatch(changeUserData(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
