import React from "react";

import { Navbar, Container , Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" >
  <Container fluid>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/courses">Courses</Nav.Link>
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="#memes">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container >
</Navbar>
    
    // <nav>
    //   <NavLink to="/">Home</NavLink>
    //   {" | "}
    //   <NavLink to="/about">About</NavLink>
    //   {" | "}
    //   <NavLink to="/courses">Courses</NavLink>
    // </nav>
  );
};

export default Header;
