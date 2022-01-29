import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Courses</h2>
        <input
          type="text"
          //   onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
