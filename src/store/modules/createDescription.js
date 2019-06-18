const CHANGE_MEALSTYPE = "Description/CHANGE_MEALSTYPE";
const CHANGE_EXPERIENCE = "Description/CHANGE_EXPERIENCE";
const CHANGE_MINGUEST = "Description/CHANGE_MINGUEST";
const CHANGE_MAXGUEST = "Description/CHANGE_MAXGUEST";
const CHANGE_TITLE = "Description/CHANGE_TITLE";
const CHANGE_INTRO = "Description/CHANGE_INTRO";
const CHANGE_STARTEVENT = "Description/CHANGE_STARTEVENT";
const CHANGE_DEADLINE = "Description/CHANGE_DEADLINE";
const CHANGE_IMGS = "Description/CHANGE_IMGS";
const CHANGE_FOODS = "Description/CHANGE_FOODS";

export const changeMealsType = mealsType => ({ type: CHANGE_MEALSTYPE, mealsType });
export const changeExperience = experience => ({ type: CHANGE_EXPERIENCE, experience });
export const changeMinGuest = guestMin => ({ type: CHANGE_MINGUEST, guestMin });
export const changeMaxGuest = guestMax => ({ type: CHANGE_MAXGUEST, guestMax });
export const changeTitle = title => ({ type: CHANGE_TITLE, title });
export const changeIntro = intro => ({ type: CHANGE_INTRO, intro });
export const changeStartEvent = startDate => ({ type: CHANGE_STARTEVENT, startDate });
export const changeDeadline = deadline => ({ type: CHANGE_DEADLINE, deadline });
export const changeIMGS = images => ({ type: CHANGE_IMGS, images });
export const changeFoods = foods => ({ type: CHANGE_FOODS, foods });

const initialState = {
  images: [],
  preparefoods: []
};

export default function createDescription(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EXPERIENCE:
      return {
        ...state,
        experience: action.experience
      };
    case CHANGE_MINGUEST:
      return {
        ...state,
        guestMin: action.guestMin
      };
    case CHANGE_MAXGUEST:
      return {
        ...state,
        guestMax: action.guestMax
      };
    case CHANGE_MEALSTYPE:
      return {
        ...state,
        mealsType: action.mealsType
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case CHANGE_INTRO:
      return {
        ...state,
        description: action.intro
      };
    case CHANGE_STARTEVENT:
      return {
        ...state,
        openDate: action.startDate
      };
    case CHANGE_DEADLINE:
      return {
        ...state,
        deadline: action.deadline
      };
    case CHANGE_IMGS:
      return {
        ...state,
        images: action.images
      };
    case CHANGE_FOODS:
      return {
        ...state,
        preparefoods: action.foods
      };
    default:
      return state;
  }
}
