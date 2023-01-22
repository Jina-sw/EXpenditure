import React, { useContext } from 'react';
import './App.css';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navi.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LoginContext } from './Contexts/LoginContext';


const Navi = () => {

  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("login", 'false');
  };

  const loggedIn = (
    <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" onClick={logout}>Log Out</NavDropdown.Item>
            <NavDropdown.Divider />
            <LinkContainer to="/mainprogram">
              <NavDropdown.Item href="#action/3.4">
                Program
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </div>
  );

  const loggedOut = (
    <div>
      <LinkContainer to="/signin">
        <Button className="SI" variant="light">Sign In</Button>
      </LinkContainer>
      <LinkContainer to="/signup">
        <Button className="SU" variant="light">Sign Up</Button>
      </LinkContainer>
    </div>
  );

  return (
    <div className="nav">
      <LinkContainer to="/">
        <div className="logo logoPointerCursor"><span className="HLLogo">EX</span>penditure</div>
      </LinkContainer>
      <div className="SUI">
        <Navbar bg="light" expand="lg" className="menu">
          <Container>
            {isLoggedIn ? loggedIn : loggedOut}
          </Container>
        </Navbar>

      </div>
    </div>
  )
}
export default Navi;

// <Button className="SI" variant="light">Sign In</Button>
//<Button className="SU" variant="light">Sign Up</Button>