import { combineReducers } from "redux";
import karmaReducer from "./reducers/karmaReducer";
import tutorReducer from "./reducers/tutorReducer";

const rootReducer = combineReducers({
  karma: karmaReducer,
  tutorPoints: tutorReducer,
});

export default rootReducer;