import React from "react";
import { connect } from "react-redux";
import "./ProfilePicture.css";
import Uploader from "../../common/uploader/Uploader";
const LAMDAURL = process.env.REACT_APP_LAMDAURL;

function ProfilePicture(props) {
  const { profileImg } = props;

  return (
    <div className="ProfilePicture">
      <div className="ProfilePicture-textBox">
        <h1>Profile Picture</h1>
        <h3>Don't forget a smile is the best way to introduce yourself to others.</h3>
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <img src={profileImg} className="ProfilePicture-img" alt="profile" />
      </div>
      <div className="ProfilePicture-Box ProfilePicture-units">
        <Uploader link={LAMDAURL} flag="profile" />
      </div>
    </div>
  );
}

const mapStateToProps = ({ joinUser }) => ({ profileImg: joinUser.profileImg });
// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps)(ProfilePicture);
