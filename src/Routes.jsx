// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import HomePage from './Routes/Home';
import ProjectsPage from './Routes/Projects';
import AboutPage from './Routes/About';

type Props = {};

const Routes = (props: Props) => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Routes;
