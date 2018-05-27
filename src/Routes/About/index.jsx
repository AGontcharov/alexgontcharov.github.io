// @flow
import * as React from 'react';

// Bootstrap
import Grid from 'react-bootstrap/es/Grid';

// Components
import Profile from './Profile';
import Scuba from './Scuba';
import Gallery from './Gallery';

// Assets
import './About.css';

type Props = {};

const About = (props: Props) => {
  return (
    <React.Fragment>
      <h1>
        About <strong>Me</strong>
      </h1>
      <Grid>
        <Profile />
        <Scuba />
        <Gallery />
      </Grid>
    </React.Fragment>
  );
};

export default About;
