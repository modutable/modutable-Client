import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "antd";
import "./Main.css";
import MainTop from "../component/main/MainTop";
import MainBottom from "../component/main/MainBottom";
import Axios from "axios";
import { changeUserData } from "../store/modules/joinUser";

const URL = process.env.REACT_APP_URL;

function Main(props) {
  const { changeUserData } = props;

  useEffect(() => {
    const _getData = async () => {
      const userData = await Axios.get(`${URL}/auth/myinfo`, {
        headers: { authorization: localStorage.getItem("token") }
      });
      console.log(changeUserData);
      changeUserData(userData);
    };

    _getData();
  }, [changeUserData]);

  return (
    <>
      <Row id="MainView-top">
        <MainTop />
      </Row>
      <Row id="MainView-bottom">
        <MainBottom />
      </Row>
    </>
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
)(Main);
