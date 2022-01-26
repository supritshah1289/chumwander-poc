import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" isactive exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" isactive>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" isactive>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
