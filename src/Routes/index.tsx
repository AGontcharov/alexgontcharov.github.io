import { Route, Switch } from 'react-router-dom';

// Components
import HomePage from './Home';
import ProjectsPage from './Projects';
import AboutPage from './About';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Routes;
