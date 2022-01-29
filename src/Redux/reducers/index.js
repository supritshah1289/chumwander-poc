//creating a root reducer file to place all reducers together
import { combineReducers } from "redux";
import courses from "./courseReducers";
import authors from "./authorReducers";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
});

export default rootReducer;
