import socketio from "socket.io-client";
const URL = process.env.REACT_APP_URL_SOCKET;
var socket = "";

export const connectSocket = () => {
  if (!socket.connected) {
    socket = socketio.connect(`${URL}`);
    const token = localStorage.getItem("token");
    if (token !== null) {
      socket.emit("login", { token });
    }
  } else {
  }
};
export const getsocket = () => {
  return socket;
};
