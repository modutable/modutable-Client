import React from "react";
import "./Tab.css";
import { StickyContainer, Sticky } from "react-sticky";
import { Tabs } from "antd";
import ProfilePicture from "../../createEvent/profile/ProfilePicture";
import AccountReviews from "./reviews/AccountReviews";
import Reservations from "./reservations/Reservations";
import Conversations from "./conversations";

export default function Tab() {
  const { TabPane } = Tabs;
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          style={{ ...style, zIndex: 1, marginTop: "5%", backgroundColor: "white" }}
        />
      )}
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
          <TabPane
            tab="Conversations"
            key="2"
            style={{ backgroundColor: "f6f6f6", borderRadius: "4px" }}
          >
            <Conversations />
          </TabPane>

          <TabPane
            tab="Reservations"
            key="3"
            style={{ backgroundColor: "f6f6f6", borderRadius: "4px" }}
          >
            <Reservations />
          </TabPane>
        </Tabs>
      </StickyContainer>
    </>
  );
}
