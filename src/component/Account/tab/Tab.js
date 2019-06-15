import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { Tabs } from "antd";
import ProfilePicture from "../../CreateEvent/Profile/ProfilePicture";
import "./Tab.css";
import AccountReviews from "../reviews/AccountReviews";

export default function Tab() {
  const { TabPane } = Tabs;
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => <DefaultTabBar {...props} style={{ ...style, zIndex: 1, marginTop: "5%" }} />}
    </Sticky>
  );
  return (
    <>
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane
            tab="Profile & Reviews"
            key="1"
            style={{ backgroundColor: "f6f6f6", borderRadius: "4px" }}
          >
            <ProfilePicture />
            <AccountReviews />
          </TabPane>
          <TabPane tab="Conversations" key="2" />
          <TabPane tab="Reservations" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </StickyContainer>
    </>
  );
}
