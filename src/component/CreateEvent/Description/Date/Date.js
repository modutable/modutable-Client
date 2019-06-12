import React from "react";
import { DatePicker } from "antd";

export default function Date(props) {
  const { changeStartEvent, changeDeadline } = props.change;

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
