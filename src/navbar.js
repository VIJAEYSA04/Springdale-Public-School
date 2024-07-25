import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Logo from "./images/pngtree-school-logo-design-template-vector-png-image_6705854.png";
function Navbarfunction()
{
return (
  <div className="navbar">
    <Navbar bg="light" data-bs-theme="light" fixed="top">

  <Navbar.Brand href="#home">
  <img src={Logo} className="logoimage" />
                     Springdale Public School
  </Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#HomePage">Home Page</Nav.Link>
    <Nav.Link href="#AboutUs">About Us</Nav.Link>
    <Nav.Link href="#Academics">Academics</Nav.Link>
    <Nav.Link href="#Admissions">Admissions</Nav.Link>
    <Nav.Link href="#Faculty">Faculty</Nav.Link>
    <Nav.Link href="#Students">Students</Nav.Link>
    <Nav.Link href="#Gallery">Gallery</Nav.Link>
    <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
  </Nav>

</Navbar>
  </div>

);
}
export default Navbarfunction;