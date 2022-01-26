//Action expects type and an object you'd like to create
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
