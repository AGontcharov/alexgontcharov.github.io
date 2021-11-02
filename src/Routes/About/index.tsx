// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import Profile from './Profile';
import Scuba from './Scuba';
import Gallery from './Gallery';

// Assets
import './about.css';

const About = () => {
  return (
    <>
      <h1>
        About <strong>Me</strong>
      </h1>
      <Container>
        <Profile />
        <Scuba />
        <Gallery />
      </Container>
    </>
  );
};

export default About;
