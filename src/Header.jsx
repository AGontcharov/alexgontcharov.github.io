// @flow
import * as React from 'react';

// Bootstrap
import { Navbar, Nav, NavItem } from 'react-bootstrap';

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Alexander Gontcharov</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            Project
          </NavItem>
          <NavItem eventKey={3} href="#">
            Resume
          </NavItem>
          <NavItem eventKey={4} href="#">
            About
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
