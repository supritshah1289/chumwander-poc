import React from "react";

class CourseSample extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to our website {this.props.name}</h1>
        <h3>Tasks for today</h3>
        <ul>
          <li>Learn about react Props</li>
          <li>Passing props from one component to other </li>
          <li>This is a design component</li>
        </ul>
      </div>
    );
  }
}

export default CourseSample;
