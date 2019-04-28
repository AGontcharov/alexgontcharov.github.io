import React from 'react';

// Bootstrap
import { Grid } from 'react-bootstrap';

// Components
import Profile from './Profile';
import Scuba from './Scuba';
import Gallery from './Gallery';

// Assets
import './About.css';

const About = () => {
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
