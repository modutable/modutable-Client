import { combineReducers } from "redux";
import createProfile from "./createProfile";
import createDescription from "./createDescription";

export default combineReducers({
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
  createProfile,
  createDescription
});
