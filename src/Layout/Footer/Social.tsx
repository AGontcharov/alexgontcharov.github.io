import React from 'react';

// Bootstrap
import { Button } from 'react-bootstrap';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faSkype,
  faTwitter,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  const onEmailClick = () => {
    window.location.href = 'mailto:alexander.goncharov@gmail.com';
  };

  return (
    <React.Fragment>
      <h3 id="contact">Get in contact!</h3>
      <ul>
        <li>
          <div className="newsletter-box">
            <Button type="button" className="send-button" onClick={onEmailClick}>
              Email
              <div id="send-email">
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </div>
            </Button>
          </div>
        </li>
      </ul>
      <ul className="social">
        <li id="facebook">
          <a href="https://www.facebook.com/alexander.gontcharov" title="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
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
            <FontAwesomeIcon icon={faLinkedinIn} />
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
