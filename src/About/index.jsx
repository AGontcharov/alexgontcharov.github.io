// @flow
import * as React from 'react';

// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

// Assets
import './About.css';
import ProfileImage from '../assets/img/profile.jpg';
import ScubaImage from '../assets/img/scubaDiving.jpg';

type Props = {};

const About = (props: Props) => {
  return (
    <React.Fragment>
      <h1>
        About <strong>Me</strong>
      </h1>
      <Grid>
        <Row>
          <Col xs={12} lg={5} xsPull>
            <img src={ProfileImage} alt="Profile" />
          </Col>

          <Col xs={12} lg={7}>
            <div className="profile-description">
              <p>
                Recently graduated Software Engineer at the University of
                Guelph. I have a strong passion for coding, tangible projects,
                and reusable software. However, you'll often find me outdoor -
                on land or in the water.
              </p>

              <p>
                Growing up I had the privilege of living in different countries.
                Raised in the historical city of Moscow but soon after that, I
                moved to the west coast of Canada, British Columbia. My family
                settled on the outskirts of Vancouver, in a place called Burnaby
                where I developped many hobbies such as, skiing, hiking,
                swimming, and soccer (Go Gunners!).
              </p>

              <p>
                After Graduating from elementary school I moved with my family
                to the sub-tropical islands of Bermuda, which I now call home.
                By enrolling in the prestigious Bermuda High School I was able
                to graduate with an international baccalaureate degree and apply
                to the University of Guelph.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div class="scuba-description">
              <p>
                In Bermuda I discovered my love for scuba diving and started an
                internship with Blue Water Divers
                <a href="http://www.divebermuda.com"> (www.divebermuda.com) </a>
                from 2010 to 2014. I quickly progressed through the PADI
                certified levels from Open water Diver all the way to Divemaster
                learning valuble social and teamwork skills along the way. In
                the summer of 2014 I took the Instructor Development Course
                (IDC) with Ocean Divers
                <a href="https://www.oceandivers.com/">
                  {' '}
                  (www.oceandivers.com){' '}
                </a>
                and completed the Instructor Examination (IE) receiving my PADI
                Open Water Scuba Instructor certificate!
              </p>

              <img
                className="scuba-img"
                src={ScubaImage}
                alt="Teaching Scuba Diving"
              />

              <p>
                The following two summers I was fortunate enough to work for
                Dive Bermuda{' '}
                <a href="https://www.bermudascuba.com/">
                  {' '}
                  (www.bermudascuba.com)
                </a>, Bermuda's only PADI 5 Star Instructor Development Center.
                Alternating between their Grotto Bay and Southampton location, I
                was able to teach and introduce new divers the joy and
                excitement of the underwater world they're yet to discover.
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default About;
