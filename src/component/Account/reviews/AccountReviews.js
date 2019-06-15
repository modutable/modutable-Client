import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import "./AccountReviews.css";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

const { TabPane } = Tabs;

function AccountReviews(props) {
  const { id } = props;

  useEffect(() => {
    const _getData = () => {
      Axios.get(`${URL}/events/userreviews/${id}`).then(res => {
        console.log(res.data);
      });
    };
    _getData();
  }, [id]);

  return (
    <div className="card-container ">
      <Tabs type="card">
        <TabPane tab="Reviews about you" key="1" className="card_content">
          Write a review after a Eatwith experience. Reviews you've received will be visible both
          here and on your public profile
        </TabPane>
        <TabPane tab="Reviews by you" key="2" className="card_content">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
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
