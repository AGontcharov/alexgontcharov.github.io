// @flow
import * as React from 'react';

// Bootstrap
import { Grid, Row, Col, Button } from 'react-bootstrap';

// CSS
import './Footer.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <React.Fragment>
      <Grid fluid>
        <div className="footer">
          <Row>
            <Col xs={12} md={5}>
              <h3>Don't forget!</h3>
              <ul class="github-links">
                <li>
                  <a href="https://github.com/AGontcharov/Dialog-System-Compiler">
                    Dialog System Compiler
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AGontcharov/Wildebeest-2-Player-Chess-AI">
                    Wildebeest 2 Player Chess AI
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AGontcharov/Artificial-Neural-Network">
                    Artificial Neural Network
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AGontcharov/Genetic-Algorithm">
                    Genetic Algorithms
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AGontcharov/Rivals.GG">
                    Rivals.gg
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={12} md={7}>
              <h3 id="contact">Get in contact!</h3>
              <ul>
                <li>
                  <div className="newsletter-box">
                    <Button className="btn bg-gray" />
                  </div>
                </li>
              </ul>
              <ul class="social">
                <li id="facebook">
                  <a
                    href="https://www.facebook.com/alexander.gontcharov"
                    title="Facebook">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li id="twitter">
                  <a href="https://twitter.com/a_gontcharov" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li id="skype">
                  <a href="skype:alexandergoncharov?chat" title="Skype">
                    <i class="fa fa-skype" />
                  </a>
                </li>
                <li id="linkedin">
                  <a href="https://www.linkedin.com/in/agontcharov">
                    <i class="fa fa-linkedin" title="LinkedIn" />
                  </a>
                </li>
                <li id="github">
                  <a href="https://github.com/AGontcharov" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </li>
              </ul>
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
