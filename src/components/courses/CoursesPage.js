import React from "react";
import { getUser, removeUserSession } from '../common/common';

function CoursesPage(props) {
  
  
  constructor(props) {  
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }
   
  const user = getUser();
  // handle click event of logout button
  handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  handleChange = (event) => {
    event.preventDefault();
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  //render() {
    return (
      <form>
        <h2>Welcome {user.name}!<br /><br /></h2>
        <h2>Add Courses</h2>  
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        <div>{this.state.course.title}</div>
        <input type="button" onClick={handleLogout} value="Logout" />
      </form>
      
    );
  }
//}

export default CoursesPage;
