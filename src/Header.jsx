// @flow
import * as React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

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
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/projects">
            <NavItem>Project</NavItem>
          </LinkContainer>
          <NavItem>Resume</NavItem>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
