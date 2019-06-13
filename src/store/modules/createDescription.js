const CHANGE_EXPERIENCE = "Description/CHANGE_EXPERIENCE";
const CHANGE_MINGUEST = "Description/CHANGE_MINGUEST";
const CHANGE_MAXGUEST = "Description/CHANGE_MAXGUEST";
const CHANGE_TITLE = "Description/CHANGE_TITLE";
const CHANGE_INTRO = "Description/CHANGE_INTRO";
const CHANGE_STARTEVENT = "Description/CHANGE_STARTEVENT";
const CHANGE_DEADLINE = "Description/CHANGE_DEADLINE";

export const changeExperience = experience => ({ type: CHANGE_EXPERIENCE, experience });
export const changeMinGuest = minGuest => ({ type: CHANGE_MINGUEST, minGuest });
export const changeMaxGuest = maxGuest => ({ type: CHANGE_MAXGUEST, maxGuest });
export const changeTitle = title => ({ type: CHANGE_TITLE, title });
export const changeIntro = intro => ({ type: CHANGE_INTRO, intro });
export const changeStartEvent = startDate => ({ type: CHANGE_STARTEVENT, startDate });
export const changeDeadline = deadlineDate => ({ type: CHANGE_DEADLINE, deadlineDate });

const initialState = {};

export default function createDescription(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EXPERIENCE:
      console.log(action.experience);
      return {
        ...state,
        experience: action.experience
      };
    case CHANGE_MINGUEST:
      return {
        ...state,
        minGuest: action.minGuest
      };
    case CHANGE_MAXGUEST:
      return {
        ...state,
        maxGuest: action.maxGuest
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case CHANGE_INTRO:
      return {
        ...state,
        intro: action.intro
      };
    case CHANGE_STARTEVENT:
      console.log(action.startDate);
      return {
        ...state,
        startDate: action.startDate
      };
    case CHANGE_DEADLINE:
      console.log(action.deadlineDate);
      return {
        ...state,
        deadlineDate: action.deadlineDate
      };
    default:
      return state;
  }
}
