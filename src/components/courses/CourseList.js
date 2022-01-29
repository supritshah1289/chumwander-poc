import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//receive courses object prop and render html
//presentation container, since it only represents html and does not include business logic
//consice array syntax to ommit return statement, it's single expression and automatically return
const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                href={"http://pluralsight.com/courses/" + course.slug}
                className="btn btn-light"
              >
                watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}> {course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
