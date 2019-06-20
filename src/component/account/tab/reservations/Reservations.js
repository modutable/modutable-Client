import React, { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "./slider/Slider";
import "./Reservations.css";
import { changeReservation } from "../../../../store/modules/viewSlider";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

function Reservations(props) {
  const { changeReservation, confirmData, cancleData, pendingData, userId } = props;

  useEffect(() => {
    const _getData = () => {
      Axios.get(`${URL}/events/myrequest`, {
        headers: { authorization: localStorage.getItem("token") }
      }).then(res => {
        console.log(res.data);
        changeReservation(res.data);
      });
    };

    _getData();
  }, [changeReservation]);

  return (
    <div className="reservation">
      <h2>MY RESERVATION</h2>
      <h3>Pending request</h3>
      <Slider data={pendingData} userId={userId} change={changeReservation} key={1} />
      <p />
      <h3>Confirmed request</h3>
      <Slider data={confirmData} userId={userId} change={changeReservation} key={2} />
      <p />

      <h3>Canceled request</h3>
      <Slider data={cancleData} userId={userId} change={changeReservation} key={3} />
    </div>
  );
}

const mapStateToProps = ({ viewSlider, joinUser }) => ({
  confirmData: viewSlider.confirmData,
  cancleData: viewSlider.cancleData,
  pendingData: viewSlider.pendingData,
  userId: joinUser.id
});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeReservation: data => dispatch(changeReservation(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservations);
