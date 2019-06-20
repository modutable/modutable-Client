import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import "./Connect.css";

function Connect(props) {
  const { history, profileImg, firstName, lastName, sideMenuClose } = props;

  const _logoutHandler = () => {
    localStorage.removeItem("token");

    props.history.location.pathname === "/account" ? props.history.push("/") : sideMenuClose();
  };

  return (
    <>
      <div className="SideMenu-imgBox">
        <img
          src={profileImg}
          className="SideMenu-img"
          width="100px"
          height="100px"
          alt="profilePicture"
        />
      </div>
      <div className="SideMenu-Button">
        <h3>Hi! </h3>
        {firstName} {lastName}
      </div>
      <div>
        <Button
          onClick={() => {
            history.push("/account");
          }}
          className="SideMenu-Button"
        >
          My Account
        </Button>
      </div>
      <div>
        <Button
          className="SideMenu-Button"
          onClick={() => {
            history.push("/createEvent/profile");
          }}
        >
          Become Host
        </Button>
      </div>
      <div>
        <Button
          className="SideMenu-Button"
          style={{
            backgroundColor: "rgb(242,160,119)",
            color: "white",
            fontWeight: "bold"
          }}
          onClick={_logoutHandler}
        >
          Logout
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = ({ joinUser }) => ({
  profileImg: joinUser.profileImg,
  firstName: joinUser.firstName,
  lastName: joinUser.lastName
});
// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default withRouter(connect(mapStateToProps)(Connect));
