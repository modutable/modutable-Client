const CHANGE_INPUTPHONE = "Profile/CHANGE_INPUTPHONE";
const CHANGE_INPUTADDRESS = "Profile/CHANGE_ADDRESSINPUT";
const CHANGE_STEP = "Profile/CHANGE_STEP";

export const changePhone = phone => ({ type: CHANGE_INPUTPHONE, phone });
export const changeAddress = address => ({ type: CHANGE_INPUTADDRESS, address });
export const changeStep = data => ({ type: CHANGE_STEP, data });

const initialState = {
  phone: null,
  address: null,
  step: "first",
  PFState: "process",
  VFState: "wait",
  photoState: "wait"
};

export default function createProfile(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUTPHONE:
      return {
        ...state,
        phone: action.phone
      };
    case CHANGE_INPUTADDRESS:
      console.log("action =>", action.address);
      return {
        ...state,
        address: action.address
      };
    case CHANGE_STEP:
      console.log("data =>", action.data);
      return {
        ...state,
        step: action.data.step,
        PFState: action.data.PFState,
        VFState: action.data.VFState,
        photoState: action.data.photoState
      };
    default:
      return state;
  }
}
