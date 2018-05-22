// @flow
import * as React from 'react';

// Component
import Links from './Links';
import Social from './Social';

// CSS
import './Footer.css';

// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

type Props = {};

const Footer = (props: Props) => {
  return (
    <React.Fragment>
      <Grid fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="footer">
          <Row>
            <Col xs={12} md={5}>
              <Links />
            </Col>
            <Col xs={12} md={7}>
              <Social />
            </Col>
          </Row>
        </div>
      </Grid>

      <div className="footer-bottom">
        <p>Copyright © 2017 Alexander Gontcharov. All right reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
