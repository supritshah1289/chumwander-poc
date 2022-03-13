import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
