import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../Redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //dispatching an action to create a course
    // debugger;
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//this function determines what state is passed to our component via props
//request only the data you need and no more. Otherwise when redux store updates, it will re-render the component
function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses,
  };
}

//this lets us declare what actions to pass to our components on props
//this function determines which actions are available to this component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

//connect function connects to redux
//then we take results of the connect function and pass it to coursePage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
