// @flow
import * as React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

class App extends React.Component<React.Node> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
