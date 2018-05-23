// @flow
import * as React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

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
          <LinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/projects">
            <NavItem eventKey={2}>Project</NavItem>
          </LinkContainer>
          <NavItem eventKey={3}>Resume</NavItem>
          <LinkContainer to="/about">
            <NavItem eventKey={4}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
