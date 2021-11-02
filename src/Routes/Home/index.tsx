// Assets
import './home.css';
import coverImage from '../../assets/img/cover.jpg';

const Home = () => {
  return (
    <div className="home-description">
      <img src={coverImage} alt="Programming on the Beach" />
      <div className="animation-wrapper">
        <p id="eat">Eat. </p>
        <p id="sleep">Sleep. </p>
        <p id="code">Code. </p>
        <p id="scuba">Scuba Dive. </p>
        <p id="repeat">Repeat.</p>
      </div>
    </div>
  );
};

export default Home;
