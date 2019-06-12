import React from "react";
import "./Description.css";
import Experience from "./Experience/Experience";
import Date from "./Date/Date";
import {
  changeExperience,
  changeMinGuest,
  changeMaxGuest,
  changeTitle,
  changeIntro,
  changeStartEvent,
  changeDeadline
} from "../../../store/modules/createDescription";
import { connect } from "react-redux";

function Description(props) {
  const {
    changeExperience,
    changeMinGuest,
    changeMaxGuest,
    changeTitle,
    changeIntro,
    changeStartEvent,
    changeDeadline
  } = props;

  return (
    <div>
      <Experience
        change={{ changeExperience, changeMinGuest, changeMaxGuest, changeTitle, changeIntro }}
      />
      <Date change={{ changeStartEvent, changeDeadline }} />
    </div>
  );
}

const mapStateToProps = () => ({});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeExperience: experience => dispatch(changeExperience(experience)),
  changeMinGuest: minGuest => dispatch(changeMinGuest(minGuest)),
  changeMaxGuest: maxGuest => dispatch(changeMaxGuest(maxGuest)),
  changeTitle: title => dispatch(changeTitle(title)),
  changeIntro: intro => dispatch(changeIntro(intro)),
  changeStartEvent: startDate => dispatch(changeStartEvent(startDate)),
  changeDeadline: deadlineDate => dispatch(changeDeadline(deadlineDate))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
