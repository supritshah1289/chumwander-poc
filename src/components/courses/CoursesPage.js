import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../Redux/actions/courseActions";
import * as authorActions from "../../Redux/actions/authorActions"; //to request authors data using actions
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      //call action when the component mounts on browser
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed....." + error);
      });
    }

    if (authors.length === 0) {
      //call load author when component mounts
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed....." + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//this function determines what state is passed to our component via props
//request only the data you need and no more. Otherwise when redux store updates, it will re-render the component
function mapStateToProps(state) {
  // debugger;
  //map each authors name from courses
  return {
    //since async call to author and course api. We need to check if both exists using ternary

    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            //spread course object and add another property finding authors name
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

//this lets us declare what actions to pass to our components on props
//this function determines which actions are available to this component
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

//connect function connects to redux
//then we take results of the connect function and pass it to coursePage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
