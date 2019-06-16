import React from "react";
import { connect } from "react-redux";
import { DatePicker } from "antd";
import { changeStartEvent, changeDeadline } from "../../../../store/modules/createDescription";

function DatePick(props) {
  const { changeStartEvent, changeDeadline } = props;

  const _startDateHandler = ({ _d }) => {
    changeStartEvent(_d);
  };

  const _DeadlineHandler = ({ _d }) => {
    changeDeadline(_d);
  };

  return (
    <div className="container">
      <h1>Date</h1>
      <div style={{ width: "100%" }}>
        <h3>Start event</h3>
        <DatePicker
          placeholder="Start"
          format="YYYY-MM-DD HH:mm:ss"
          style={{ width: "50%" }}
          onChange={_startDateHandler}
        />
      </div>
      <p />
      <div>
        <h3>Booking deadline</h3>
        Select how long prior to the event you would like guests to be able to book. After this time
        has expired, the event can no longer be booked. Guests can book up to
        <p />
        <div>
          <DatePicker
            showTime
            placeholder="Select Time"
            style={{ width: "50%" }}
            onChange={_DeadlineHandler}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeStartEvent: startDate => dispatch(changeStartEvent(startDate)),
  changeDeadline: deadline => dispatch(changeDeadline(deadline))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePick);
