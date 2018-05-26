// @flow
import * as React from 'react';

// Bootstrap
import Button from 'react-bootstrap/es/Button';

// FontAwesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLongArrowRight from '@fortawesome/fontawesome-free-solid/faLongArrowAltRight';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

type Props = {};

const Social = (props: Props) => {
  return (
    <React.Fragment>
      <h3 id="contact">Get in contact!</h3>
      <ul>
        <li>
          <div className="newsletter-box">
            <Button
              type="button"
              className="send-button"
              onClick={() => {
                window.location.href = 'mailto:alexander.goncharov@gmail.com';
              }}>
              Email
              <FontAwesomeIcon id="send-email" icon={faLongArrowRight} />
            </Button>
          </div>
        </li>
      </ul>
      <ul className="social">
        <li id="facebook">
          <a href="https://www.facebook.com/alexander.gontcharov" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li id="twitter">
          <a href="https://twitter.com/a_gontcharov" title="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li id="skype">
          <a href="skype:alexandergoncharov?chat" title="Skype">
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </li>
        <li id="linkedin">
          <a href="https://www.linkedin.com/in/agontcharov">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li id="github">
          <a href="https://github.com/AGontcharov" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Social;
