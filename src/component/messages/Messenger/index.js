import React, { Component } from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";
import axios from "axios";
import { getsocket } from "../../common/socket";
const URL = process.env.REACT_APP_URL;

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.socket = "";
    this.state = {
      otherUser: {},
      myId: 0,
      originMessages: [],
      messages: [],
      showMessages: []
    };
  }
  componentDidMount() {
    const bind = this;
    this.socket = getsocket();
    axios
      .get(`${URL}/messages/talklist`, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(result => {
        this.setState({
          originMessages: result.data.messages,
          messages: result.data.messages,
          myId: result.data.myId
        });
        if (this.props === {}) {
          this.newRoom();
        }
      });
    this.socket.on("getMessage", function(data) {
      const newMessage = {
        createdAt: new Date(),
        email: data.userInfo.email,
        isMine: false,
        otherUserId: data.userInfo.id,
        otherUserName: data.userInfo.firstName + " " + data.userInfo.lastName,
        photo: data.userInfo.profileImg,
        text: data.text
      };
      bind.setState({
        messages: [...bind.state.messages, newMessage]
      });
    });
  }
  deleteMessage = () => {
    if (this.state.otherUser.otherUserId === undefined) return;
    axios.delete(`${URL}/messages/${this.state.otherUser.otherUserId}`, {
      headers: { authorization: localStorage.getItem("token") }
    });
    const originMessages = this.state.originMessages.filter(message => {
      return message.otherUserId !== this.state.otherUser.otherUserId;
    });
    this.setState({
      originMessages,
      messages: originMessages
    });
  };
  newRoom = () => {
    const { email, firstName, lastName, profileImg, userId } = this.props.props;
    const yourId = userId;
    const yourEmail = email;
    const yourName = firstName + lastName;
    const yourPhoto = profileImg;

    const newMessage = {
      createdAt: new Date(),
      email: yourEmail,
      isMine: true,
      otherUserId: yourId,
      otherUserName: yourName,
      photo: yourPhoto,
      text: ""
    };
    this.setState({
      originMessages: [...this.state.originMessages, newMessage],
      messages: [...this.state.messages, newMessage]
    });
  };
  selectUser = otherUser => {
    this.setState({
      otherUser
    });
  };
  sendMessage = (e, value) => {
    if (e.which !== 13) return;
    var newMessage = {
      createdAt: new Date(),
      updatedAt: new Date(),
      email: this.state.otherUser.email,
      isMine: true,
      otherUserId: this.state.otherUser.otherUserId,
      otherUserName: this.state.otherUser.otherUserName,
      photo: this.state.otherUser.photo,
      text: value,
      myId: this.state.myId
    };

    this.setState({
      messages: [...this.state.messages, newMessage]
    });
    console.log(newMessage);
    this.socket.emit(
      "sendMessage",
      Object.assign(newMessage, { token: localStorage.getItem("token") })
    );
    e.target.value = "";
  };
  userSearch = searchName => {
    var newUser = this.state.originMessages.filter(message => {
      return message.otherUserName
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
    this.setState({
      messages: newUser
    });
  };
  render() {
    var showMessages = this.state.messages.filter(message => {
      return message.otherUserId === this.state.otherUser.otherUserId;
    });
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList
            messages={this.state.messages}
            selectUser={this.selectUser}
            userSearch={this.userSearch}
            newRoom={this.newRoom}
          />
        </div>

        <div className="scrollable content">
          <MessageList
            messages={showMessages}
            sendMessage={this.sendMessage}
            deleteMessage={this.deleteMessage}
          />
        </div>
      </div>
    );
  }
}
