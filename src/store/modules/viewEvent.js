const CHANGE_EVENTDATA = "Event/CHANGE_EVENTDATA";
const CHANGE_GUESTS = "Event/CHANGE_GUESTS";
const CHANGE_FOODS = "Event/CHANGE_FOODS";

export const changeData = data => ({ type: CHANGE_EVENTDATA, data });
export const changeGuests = guests => ({ type: CHANGE_GUESTS, guests });
export const changeFoods = preparefoods => ({ type: CHANGE_FOODS, preparefoods });

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
      return {
        ...state,
        address: action.data.address,
        deadline: action.data.deadline,
        description: action.data.description,
        events_users: action.data.events_users,
        experience: action.data.experience,
        guestMax: action.data.guestMax,
        guestMin: action.data.guestMin,
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
    case CHANGE_GUESTS:
      console.log("guest 바꼈다");
      return {
        ...state,
        guests: action.guests
      };
    case CHANGE_FOODS:
      console.log("food 바꼈다", action);

      return {
        ...state,
        preparefoods: action.preparefoods
      };
    default:
      return state;
  }
}
