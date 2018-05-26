// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Switch from 'react-router-dom/es/Switch';
// import Route from 'react-router-dom/es/Route';

// Components
import HomePage from './Home';
import ProjectsPage from './Projects';
import AboutPage from './About';

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
