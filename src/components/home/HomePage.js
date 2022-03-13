/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="h-100 p-5 text-white bg-light">
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
