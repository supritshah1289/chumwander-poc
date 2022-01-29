import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//the export default syntax allows to rename the function used in as an import in another file.In this case file is indexjs under reducers.
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // debugger;
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
