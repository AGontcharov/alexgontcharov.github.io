// @flow
import * as React from 'react';

// Components
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Routes from './Routes';

class App extends React.Component<React.Node> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
