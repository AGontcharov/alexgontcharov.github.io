import React from 'react';

// Component
import Links from './Links';
import Social from './Social';

// CSS
import './footer.css';

// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Grid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col xs={12} md={5}>
              <Links />
            </Col>
            <Col xs={12} md={7}>
              <Social />
            </Col>
          </Row>
        </Grid>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Alexander Gontcharov. All right reserved.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
