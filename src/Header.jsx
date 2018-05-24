// @flow
import * as React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

// Bootstrap
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// To Do
// Increase navbar size?
// LinkContainer for resume?

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <NavLink to="/" className="navbar-brand">
          Alexander Gontcharov
        </NavLink>
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
          <NavItem>Resume</NavItem>

          {/* <LinkContainer to="/resume"> */}
          {/* <NavItem>Resume</NavItem> */}
          {/* </LinkContainer> */}

          {/* <NavItem
            eventKey={0}
            onClick={event => {
              console.log('here');
              event.preventDefault();
              window.open('/resume.pdf');
            }}>
            Resume
          </NavItem> */}

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
