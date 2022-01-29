import * as types from "../actions/actionTypes";
import initialState from "./initialState";
//the export default syntax allows to rename the function used in as an import in another file.In this case file is indexjs under reducers.
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
