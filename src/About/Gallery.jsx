// @flow
import * as React from 'react';

// Bootstrap
import Row from 'react-bootstrap/es/Row';
import Col from 'react-bootstrap/es/Col';
import Lightbox from 'react-images';

// Assets
import SkiJump from '../assets/img/skiJump.jpg';
import Forceful from '../assets/img/forceful.jpg';
import Jaccuzi from '../assets/img/jaccuzi.jpg';
import Soccer from '../assets/img/soccer.jpg';
import SkiJumpFull from '../assets/img/skiJumpFull.jpg';
import ForcefulFull from '../assets/img/forcefulFull.jpg';
import JaccuziFull from '../assets/img/jaccuziFull.jpg';
import SoccerFull from '../assets/img/soccerFull.jpg';

type Props = {};

type State = {
  lightboxIsOpen: boolean,
  currentImage: number
};

export default class Gallery extends React.Component<Props, State> {
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  };

  openLightbox(index: number, event: SyntheticEvent<>) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoImage(index: number) {
    this.setState({
      currentImage: index
    });
  }

  render() {
    const thumbnails = [
      { src: SkiJump, caption: 'Skiing in the French Alps - Méribel' },
      { src: Forceful, caption: 'Diving at the Tugs in Bermuda' },
      { src: Jaccuzi, caption: 'No place like home - Bermuda' },
      { src: Soccer, caption: 'Explore in Québec City' }
    ];

    const images = [
      { src: SkiJumpFull, caption: 'Skiing in the French Alps - Méribel' },
      { src: ForcefulFull, caption: 'Diving in Bermuda at the Tugs' },
      { src: JaccuziFull, caption: 'No place like home' },
      { src: SoccerFull, caption: 'Explore in Québec City' }
    ];

    return (
      <React.Fragment>
        <div id="thumbnail">
          <h3 className="about-subheading">My Passion</h3>
          <Row>
            {thumbnails.map((image, i) => {
              return (
                <Col key={i} style={{ padding: '5px' }} xs={6} md={4} lg={3}>
                  <a href={image.src} onClick={e => this.openLightbox(i, e)}>
                    <img src={image.src} alt={image.caption} />
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>

        <Lightbox
          backdropClosesModal
          currentImage={this.state.currentImage}
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickNext={this.gotoNext.bind(this)}
          onClickPrev={this.gotoPrevious.bind(this)}
          onClickThumbnail={this.gotoImage.bind(this)}
          onClose={this.closeLightbox.bind(this)}
        />
      </React.Fragment>
    );
  }
}
