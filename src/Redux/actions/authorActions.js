import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi"; //api end point

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

//thunk
//every thunk returns function that accepts dispatch as an argument
export function loadAuthors() {
  //this function is utilize by middleware in configurestore.js
  //redux thunk injects dispactch so we do not have to.
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
