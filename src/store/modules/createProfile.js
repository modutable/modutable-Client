const CHANGE_INPUTNUM = "counter/CHANGE_NUMINPUT";
const CHANGE_INPUTADDRESS = "counter/CHANGE_ADDRESSINPUT";
const CHANGE_STEP = "counter/CHANGE_STEP";

export const changeNumber = number => ({ type: CHANGE_INPUTNUM, number });
export const changeAddress = address => ({ type: CHANGE_INPUTADDRESS, address });
export const changeStep = data => ({ type: CHANGE_STEP, data });

const initialState = {
  number: null,
  address: null,
  step: "first",
  PFState: "process",
  VFState: "wait",
  photo: "wait"
};

export default function createProfile(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUTNUM:
      return {
        ...state,
        number: action.number
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
        photo: action.data.photo
      };
    default:
      return state;
  }
}
