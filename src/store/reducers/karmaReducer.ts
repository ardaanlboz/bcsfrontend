import { karmaPoints } from "../initialValues/karmaPoints";

export default function karmaReducer (state = karmaPoints, action:any)  {
  switch (action.type) {
    case "INCREASE_KARMA":
      return {...state, value : state.value + 1};
    case "DECREASE_KARMA":
      return {...state, value : state.value - 1};
    case "INCREASE_BY_AMOUNT_KARMA":
      return {...state, value : state.value + action.payload};
    case "DECREASE_BY_AMOUNT_KARMA":
      return {...state, value : state.value - action.payload};
    default:
      return state;
  }
};


