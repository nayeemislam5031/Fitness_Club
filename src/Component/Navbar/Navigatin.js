import React from 'react'
import './Navigation.css'
import { Navbar,Container,Nav,Form,Button } from "react-bootstrap";

const Navigatin = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">The WBF Way</Nav.Link>
              <Nav.Link href="#action2">Our Programs</Nav.Link>
              <Nav.Link href="#action2">Member Stories</Nav.Link>
              <Nav.Link href="#action2">Conatct Us</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigatin