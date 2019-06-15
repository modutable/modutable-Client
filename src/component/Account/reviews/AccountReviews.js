import React from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import "./AccountReviews.css";
import AboutReview from "./aboutReview/AboutReview";
import ByReview from "./byReview/ByReview";

const { TabPane } = Tabs;

function AccountReviews(props) {
  const { id } = props;

  return (
    <div className="card-container ">
      <Tabs type="card">
        <TabPane tab="Reviews about you" key="1" className="card_content">
          Write a review after a Eatwith experience. Reviews you've received will be visible both
          here and on your public profile
          <p />
          <AboutReview id={id} />
        </TabPane>
        <TabPane tab="Reviews by you" key="2" className="card_content">
          Write a review after a Eatwith experience. Reviews you've received will be visible both
          here and on your public profile
          <p />
          <ByReview id={id} />
        </TabPane>
      </Tabs>
    </div>
  );
}

const mapStateToProps = ({ joinUser }) => ({ id: joinUser.id });
// props 로 넣어줄 액션 생성함수

// const mapDispatchToProps = dispatch => ({});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps)(AccountReviews);
