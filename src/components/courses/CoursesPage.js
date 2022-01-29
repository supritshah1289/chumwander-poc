import React from "react";
import CourseSample from "./CourseSample";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
        name: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const course = { ...this.state.course, name: event.target.value };
    this.setState({ course: course });
  };

  render() {
    return (
      <form>
        <h2>Add Courses</h2>
        <CourseSample name={this.state.course.name} />
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.name}
        />

        <input type="submit" value="Save" />
        <div>{this.state.course.name}</div>
      </form>
    );
  }
}

export default CoursesPage;
