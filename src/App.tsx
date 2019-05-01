import React from 'react';

// Components
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Routes from './Routes';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  );
};

export default App;
