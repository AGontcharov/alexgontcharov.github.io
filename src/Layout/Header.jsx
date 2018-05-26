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

import Resume from '../assets/resume.pdf';

// TODO:
// Increase navbar size?

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

          <LinkContainer
            to="/resume"
            onClick={event => {
              event.preventDefault();
              window.open(Resume, 'Resume');
            }}>
            <NavItem>Resume</NavItem>
          </LinkContainer>

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
