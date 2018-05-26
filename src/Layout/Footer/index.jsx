// @flow
import * as React from 'react';

// Component
import Links from './Links';
import Social from './Social';

// CSS
import './footer.css';

// Bootstrap
import Grid from 'react-bootstrap/es/Grid';
import Row from 'react-bootstrap/es/Row';
import Col from 'react-bootstrap/es/Col';

type Props = {};

const Footer = (props: Props) => {
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
