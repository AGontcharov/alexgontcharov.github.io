import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Resume from '../resume.pdf';

const Header = () => {
  const onResumeClicked = (event) => {
    event.preventDefault();
    window.open(Resume, 'Resume');
  };

  return (
    <Navbar expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-brand">
            {'Alexander Gontcharov'}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <LinkContainer to="/" exact>
              <Nav.Link>{'Home'}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>{'Project'}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume" onClick={onResumeClicked}>
              <Nav.Link>{'Resume'}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{'About'}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
