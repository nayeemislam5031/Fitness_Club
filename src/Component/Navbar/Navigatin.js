import React from 'react';
import './Navigation.css';
import { Navbar,Container,Nav } from "react-bootstrap";
import logo from '../../assets/logo.png';

// import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

const Navigatin = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/wbfway">
                The WBF Way
              </Nav.Link>
              <Nav.Link as={Link} to="/programs">
                Our Programs
              </Nav.Link>
              <Nav.Link as={Link} to="/stories">
                Member Stories
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigatin