import * as types from "./actionTypes";

//Action expects type and an object you'd like to create
export function createCourse(course) {
  // debugger;
  return { type: types.CREATE_COURSE, course };
}
