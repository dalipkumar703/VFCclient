import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const NavBar=({})=>{
  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">VoteForEverything</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
<LinkContainer to='/location'>
      <NavItem eventKey={1}>
    Location
      </NavItem>
      </LinkContainer>
      <NavItem eventKey={2} href="#">
        Create
      </NavItem>
      <NavItem eventKey={3} href="#">
        Vote
      </NavItem>
        <NavItem eventKey={4} href="#">
          Login
        </NavItem>
        <NavItem eventKey={5} href="#">
          SignUp
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

}
export default NavBar;
