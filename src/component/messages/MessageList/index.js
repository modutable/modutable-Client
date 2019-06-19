import React, { Component } from "react";
import Compose from "../Compose";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import Message from "../Message";
import moment from "moment";

import "./MessageList.css";

export default class MessageList extends Component {
  componentDidMount() {}

  getMessages = () => {};

  renderMessages() {
    let i = 0;
    let messageCount = this.props.messages.length;
    let messages = [];
    while (i < messageCount) {
      let previous = this.props.messages[i - 1];
      let current = this.props.messages[i];
      let next = this.props.messages[i + 1];
      let isMine = this.props.messages[i].isMine;
      let currentMoment = moment(new Date(this.props.messages[i].createdAt).getTime());
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as("hours") < 1) {
          startsSequence = false;
        }

        if (previousDuration.as("hours") < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as("hours") < 1) {
          endsSequence = false;
        }
      }
      if (current.text !== "") {
        messages.push(
          <Message
            key={i}
            isMine={isMine}
            startsSequence={startsSequence}
            endsSequence={endsSequence}
            showTimestamp={showTimestamp}
            data={current}
          />
        );
      }

      // Proceed to the next message.
      i += 1;
    }

    return messages;
  }

  render() {
    return (
      <>
        <div className="message-list">
          <Toolbar
            title="Conversation Title"
            rightItems={[
              <div onClick={this.props.deleteMessage}>
                <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />
              </div>
            ]}
          />

          <div className="message-list-container">{this.renderMessages()}</div>
        </div>
        <Compose rightItems={[]} sendMessage={this.props.sendMessage} />
      </>
    );
  }
}
