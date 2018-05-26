// @flow
import * as React from 'react';
import NavLink from 'react-router-dom/NavLink';

// TODO:
// Reduce import size
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';
import NavItem from 'react-bootstrap/es/NavItem';

// TODO:
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
