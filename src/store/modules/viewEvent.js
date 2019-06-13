const CHANGE_EVENTDATA = "Event/CHANGE_EVENTDATA";

export const changeData = data => ({ type: CHANGE_EVENTDATA, data });

const initialState = {
  address: null,
  createdAt: null,
  deadline: null,
  description: null,
  events_users: [],
  experience: null,
  guestMax: null,
  guestMin: null,
  guests: null,
  id: null,
  images: [],
  mealsType: null,
  openDate: null,
  phone: null,
  preparefoods: [],
  rating: null,
  title: null,
  user: {},
  userId: null
};

export default function viewEvent(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EVENTDATA:
      console.log("get data ==> ", action);
      return {
        ...state,
        address: action.data.address,
        deadline: action.data.deadline,
        description: action.data.description,
        events_users: action.data.events_users,
        experience: action.data.experience,
        guestMax: action.data.guestMin,
        guestMin: action.data.guestMax,
        guests: action.data.guests,
        id: action.data.id,
        images: action.data.images,
        mealsType: action.data.mealsType,
        openDate: action.data.openDate,
        phone: action.data.phone,
        preparefoods: action.data.preparefoods,
        rating: action.data.rating,
        title: action.data.title,
        user: action.data.user,
        userId: action.data.userId
      };
    default:
      return state;
  }
}
