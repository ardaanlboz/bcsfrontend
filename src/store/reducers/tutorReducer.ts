import { tutorPoints } from "../initialValues/tutorPoints";

export default function tutorReducer(state = tutorPoints, action:any) {
  switch (action.type) {
    case "INCREASE_TUTOR_POINTS":
      return {...state, value : state.value + 1};
    case "DECREASE_TUTOR_POINTS":
      return {...state, value : state.value - 1};
    case "INCREASE_BY_AMOUNT_TUTOR_POINTS":
      return {...state, value : state.value + action.payload};
    case "DECREASE_BY_AMOUNT_TUTOR_POINTS":
      return {...state, value : state.value - action.payload};
    default:
      return state;
  }
};


