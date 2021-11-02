import * as React from 'react';
import Lightbox from 'react-images';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Assets
import SkiJump from '../../assets/img/skiJump.jpg';
import Forceful from '../../assets/img/forceful.jpg';
import Jaccuzi from '../../assets/img/jaccuzi.jpg';
import Soccer from '../../assets/img/soccer.jpg';
import SkiJumpFull from '../../assets/img/skiJumpFull.jpg';
import ForcefulFull from '../../assets/img/forcefulFull.jpg';
import JaccuziFull from '../../assets/img/jaccuziFull.jpg';
import SoccerFull from '../../assets/img/soccerFull.jpg';

const Gallery = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<number>(0);

  const openLightbox = (index: number) => (event: React.SyntheticEvent) => {
    event.preventDefault();
    setImage(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setImage(0);
    setOpen(false);
  };

  const gotoPrevious = () => {
    setImage(image - 1);
  };

  const gotoNext = () => {
    setImage(image + 1);
  };

  const gotoImage = (index: number) => {
    setImage(index);
  };

  const thumbnails = [
    { src: SkiJump, caption: 'Skiing in the French Alps - Méribel' },
    { src: Forceful, caption: 'Diving at the Tugs in Bermuda' },
    { src: Jaccuzi, caption: 'No place like home - Bermuda' },
    { src: Soccer, caption: 'Explore in Québec City' },
  ];

  const images = [
    { src: SkiJumpFull, caption: 'Skiing in the French Alps - Méribel' },
    { src: ForcefulFull, caption: 'Diving in Bermuda at the Tugs' },
    { src: JaccuziFull, caption: 'No place like home' },
    { src: SoccerFull, caption: 'Explore in Québec City' },
  ];

  return (
    <>
      <div id="thumbnail">
        <h3 className="about-subheading">My Passion</h3>
        <Row>
          {thumbnails.map((image, index) => (
            <Col key={index} style={{ padding: '5px' }} xs={6} md={4} lg={3}>
              <a href={image.src} onClick={openLightbox(index)}>
                <img src={image.src} alt={image.caption} />
              </a>
            </Col>
          ))}
        </Row>
      </div>

      <Lightbox
        backdropClosesModal
        currentImage={image}
        images={images}
        isOpen={isOpen}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Gallery;
