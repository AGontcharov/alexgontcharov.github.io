// @flow
import * as React from 'react';

// Bootstrap
import Row from 'react-bootstrap/es/Row';
import Col from 'react-bootstrap/es/Col';

// Assets
import ScubaImage from '../../assets/img/scubaDiving.jpg';

type Props = {};

const Scuba = (props: Props) => {
  return (
    <Row>
      <Col xs={12}>
        <div className="scuba-description">
          <p>
            In Bermuda I discovered my love for scuba diving and started an internship
            with Blue Water Divers
            <a href="http://www.divebermuda.com"> (www.divebermuda.com) </a>
            from 2010 to 2014. I quickly progressed through the PADI certified levels from
            Open water Diver all the way to Divemaster learning valuble social and
            teamwork skills along the way. In the summer of 2014 I took the Instructor
            Development Course (IDC) with Ocean Divers
            <a href="https://www.oceandivers.com/"> (www.oceandivers.com) </a>
            and completed the Instructor Examination (IE) receiving my PADI Open Water
            Scuba Instructor certificate!
          </p>

          <img className="scuba-img" src={ScubaImage} alt="Teaching Scuba Diving" />

          <p>
            The following two summers I was fortunate enough to work for Dive Bermuda
            <a href="https://www.bermudascuba.com/"> (www.bermudascuba.com) </a>,
            Bermuda's only PADI 5 Star Instructor Development Center. Alternating between
            their Grotto Bay and Southampton location, I was able to teach and introduce
            new divers the joy and excitement of the underwater world they're yet to
            discover.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Scuba;
