import React, { Component } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";

import "./ConversationList.css";

export default class ConversationList extends Component {
  render() {
    var id = [];
    var messageArr = [];
    for (var i = this.props.messages.length - 1; i >= 0; i--) {
      if (id.includes(this.props.messages[i].otherUserId)) continue;
      messageArr.push(this.props.messages[i]);
      id.push(this.props.messages[i].otherUserId);
    }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[]}
          rightItems={[
            <div onClick={this.props.newRoom}>
              <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
            </div>
          ]}
        />
        <ConversationSearch userSearch={this.props.userSearch} />
        {messageArr.map(conversation => (
          <div
            key={conversation.otherUserId}
            onClick={() => {
              this.props.selectUser({
                otherUserId: conversation.otherUserId,
                otherUserName: conversation.otherUserName,
                photo: conversation.photo,
                email: conversation.email
              });
            }}
          >
            <ConversationListItem data={conversation} />
          </div>
        ))}
      </div>
    );
  }
}
