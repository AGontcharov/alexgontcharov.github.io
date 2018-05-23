// @flow
import * as React from 'react';

// Bootstrap
import { Grid } from 'react-bootstrap';

// Components
import Profile from './Profile';
import Scuba from './Scuba';

// Assets
import './about.css';

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
      </Grid>
    </React.Fragment>
  );
};

export default About;
