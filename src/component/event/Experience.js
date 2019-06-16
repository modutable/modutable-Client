import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Icon } from "antd";
import "./Experience.css";

function Experience(props) {
  const { address, description, experience, guestMax, guests, mealsType, openDate } = props;
  let setOpenDate;

  if (openDate) {
    setOpenDate = openDate.slice(0, 10);
  }

  useEffect(() => {});

  return (
    <div id="Experience">
      <div className="box ex_iconBox">
        <div className="box ex_entry">
          <Icon className="ex_icon" type="bell" />
          <h3 className="ex_text">{mealsType}</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="clock-circle" />
          <h3 className="ex_text">{setOpenDate}</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="environment" />
          <h3 className="ex_text">{address}</h3>
        </div>
        <div className="box ex_entry">
          <Icon className="ex_icon" type="team" />
          <h3 className="ex_text">
            Max {guestMax} Join {guests}
          </h3>
        </div>
      </div>
      <div id="ex_description">
        <h3 id="ex_description_title">A WORD ABOUT THE EXPERIENCE</h3>
        <div id="ex_description_value">
          <div>{experience}</div>
          <br />
          <hr />
          <br />
          <div>{description}</div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ viewEvent }) => ({
  address: viewEvent.address,
  description: viewEvent.description,
  experience: viewEvent.experience,
  guestMax: viewEvent.guestMax,
  guests: viewEvent.guests,
  mealsType: viewEvent.mealsType,
  openDate: viewEvent.openDate
});
// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps)(Experience);
