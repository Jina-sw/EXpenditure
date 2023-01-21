import React from 'react';
import './App.css';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navi.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navi = () => {

  return (
    <div className="nav">
      <LinkContainer to="/">
        <div className="logo logoPointerCursor">EXpenditure</div>
      </LinkContainer>
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
                  <LinkContainer to="/mainprogram">
                    <NavDropdown.Item href="#action/3.4">
                      Program
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <LinkContainer to="/signin">
              <Button className="SI" variant="light">Sign In</Button>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Button className="SU" variant="light">Sign Up</Button>
            </LinkContainer>
          </Container>
        </Navbar>

      </div>
    </div>
  )
}
export default Navi;

// <Button className="SI" variant="light">Sign In</Button>
//<Button className="SU" variant="light">Sign Up</Button>