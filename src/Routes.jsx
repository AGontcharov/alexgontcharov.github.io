// @flow
import * as React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

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
