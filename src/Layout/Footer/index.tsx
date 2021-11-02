// Component
import Links from './Links';
import Social from './Social';

// CSS
import './footer.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col xs={12} md={5}>
              <Links />
            </Col>
            <Col xs={12} md={7}>
              <Social />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Alexander Gontcharov. All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
