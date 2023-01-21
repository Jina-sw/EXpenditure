import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navi = () => {

  return (
    <div className="nav">
      <div className="logo">EXpenditure</div>
      <div className="SUI">
        <Navbar bg="light" expand="lg" className="menu">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Button className="SI" variant="light">Sign In</Button>
            <Button className="SU" variant="light">Sign Up</Button>
          </Container>
        </Navbar>

      </div>
    </div>
  )
}
export default Navi;

// <Button className="SI" variant="light">Sign In</Button>
//<Button className="SU" variant="light">Sign Up</Button>