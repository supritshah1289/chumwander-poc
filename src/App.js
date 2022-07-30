import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";
import Header from "./components/common/Header";
import { SignUp } from './components/signup/signup';
import PageNotFound from "./components/PageNotFound";
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import Users from './components/users/users';
//import { usersreducer } from './components/users/usersreducer';


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let store = createStore(usersreducer);
  return (
    <div className="container-fluid">
      <Header />
      {/* <Provider store={store}>
      <Users></Users>
    </Provider> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
