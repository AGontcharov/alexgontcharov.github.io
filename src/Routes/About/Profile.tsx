import React from 'react';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Assets
import ProfileImage from '../../assets/img/profile.jpg';

const Profile = () => {
  return (
    <Row>
      <div className="profile-parent">
        <Col xs={12} lg={5}>
          <img className="profile-image" src={ProfileImage} alt="Profile" />
        </Col>

        <Col xs={12} lg={7}>
          <div className="profile-description">
            <p>
              Recently graduated Software Engineer at the University of Guelph. I have a
              strong passion for coding, tangible projects, and reusable software.
              However, you'll often find me outdoor - on land or in the water.
            </p>

            <p>
              Growing up I had the privilege of living in different countries. Raised in
              the historical city of Moscow but soon after that, I moved to the west coast
              of Canada, British Columbia. My family settled on the outskirts of
              Vancouver, in a place called Burnaby where I developped many hobbies such
              as, skiing, hiking, swimming, and soccer (Go Gunners!).
            </p>

            <p>
              After Graduating from elementary school I moved with my family to the
              sub-tropical islands of Bermuda, which I now call home. By enrolling in the
              prestigious Bermuda High School I was able to graduate with an international
              baccalaureate degree and apply to the University of Guelph.
            </p>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Profile;
