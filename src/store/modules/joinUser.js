const CHANGE_USERDATA = "joinUser/CHANGE_USERDATA";
const CHANGE_USERIMG = "joinUser/CHANGE_USERIMG";

export const changeUserData = data => ({ type: CHANGE_USERDATA, data });
export const changeUserImg = img => ({ type: CHANGE_USERIMG, img });

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  address: null,
  email: null,
  password: null,
  birthday: null,
  profileImg: null
};

export default function joinUser(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERDATA:
      return {
        ...state,
        id: action.data.id,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        address: action.data.address,
        email: action.data.email,
        password: action.data.password,
        birthday: action.data.birthday,
        profileImg: action.data.profileImg
      };
    case CHANGE_USERIMG:
      return {
        ...state,
        profileImg: action.img
      };

    default:
      return state;
  }
}
