import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { changeUserData } from "../../../../store/modules/joinUser";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

class GetSocialToken extends Component {
  _getData = async () => {
    const userData = await Axios.get(`${URL}/auth/myinfo`, {
      headers: { authorization: localStorage.getItem("token") }
    });
    changeUserData(userData.data);
  };

  render() {
    var { search } = this.props.location;
    const values = queryString.parse(search);
    localStorage.setItem("token", values.token);
    this._getData();
    this.props.history.goBack();
    return <div />;
  }
}

const mapStateToProps = () => ({});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeUserData: data => dispatch(changeUserData(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetSocialToken);
