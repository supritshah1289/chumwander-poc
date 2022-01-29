import * as types from "./actionTypes";
import * as courseAPI from "../../api/courseApi"; //api end point

//Action expects type and an object you'd like to create
export function createCourse(course) {
  // debugger;
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

//thunk
//every thunk returns function that accepts dispatch as an argument
export function loadCourses() {
  //this function is utilize by middleware in configurestore.js
  //redux thunk injects dispactch so we do not have to.
  return function (dispatch) {
    return courseAPI
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
