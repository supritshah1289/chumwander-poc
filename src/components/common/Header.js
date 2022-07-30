import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/about">About</NavLink>
      {" | "}
      <NavLink to="/courses">Courses</NavLink>
      {" | "}
      <NavLink to="/signup">Signup</NavLink>
      
    </nav>
  );
};

export default Header;
