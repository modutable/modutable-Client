const CHANGE_USERDATA = "Profile/CHANGE_USERDATA";

export const changeUserData = data => ({ type: CHANGE_USERDATA, data });

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

export default function createProfile(state = initialState, action) {
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

    default:
      return state;
  }
}
