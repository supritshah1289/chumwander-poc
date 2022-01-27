import * as types from "../actions/actionTypes";

//the export default syntax allows to rename the function used in as an import in another file.In this case file is indexjs under reducers.
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // debugger;
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
