// @flow
import * as React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// To Do
// Add red border undearneath?
// Increase navbar size?
// LinkContainer for resume?

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <LinkContainer to="/" exact>
          <Navbar.Brand>Alexander Gontcharov</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {/* Home Page */}
          <LinkContainer to="/" exact>
            <NavItem>Home</NavItem>
          </LinkContainer>

          {/* Projects Page*/}
          <LinkContainer to="/projects">
            <NavItem>Project</NavItem>
          </LinkContainer>

          {/* Resume Page*/}
          <NavItem
            eventKey={0}
            onClick={event => {
              event.preventDefault();
              window.open('resume.pdf');
            }}>
            Resume
          </NavItem>

          {/* About Page */}
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
