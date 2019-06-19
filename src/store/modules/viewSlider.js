const CHANGE_RESERVATION = "Profile/CHANGE_RESERVATION";

export const changeReservation = data => ({ type: CHANGE_RESERVATION, data });

const initialState = {
  confirmData: [],
  cancleData: [],
  pendingData: []
};

export default function viewSlider(state = initialState, action) {
  switch (action.type) {
    case CHANGE_RESERVATION:
      const confirmData = action.data.filter(ele => ele.state === "confirm");
      const cancleData = action.data.filter(ele => ele.state === "cancle");
      const pendingData = action.data.filter(ele => ele.state === "pending");
      return {
        ...state,
        confirmData,
        cancleData,
        pendingData
      };

    default:
      return state;
  }
}
