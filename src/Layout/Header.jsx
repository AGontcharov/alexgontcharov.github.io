import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Resume from '../resume.pdf';

const Header = () => {
  const onResumeClicked = event => {
    event.preventDefault();
    window.open(Resume, 'Resume');
  };

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
          {/* Home Page */}s
          <LinkContainer to="/" exact>
            <NavItem>Home</NavItem>
          </LinkContainer>
          {/* Projects Page*/}
          <LinkContainer to="/projects">
            <NavItem>Project</NavItem>
          </LinkContainer>
          {/* Resume */}
          <LinkContainer to="/resume" onClick={onResumeClicked}>
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
