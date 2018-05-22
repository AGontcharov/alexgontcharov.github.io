// @flow
import * as React from 'react';

// Bootstrap
import { Button } from 'react-bootstrap';

type Props = {};

const Social = (props: Props) => {
  return (
    <React.Fragment>
      <h3 id="contact">Get in contact!</h3>
      <ul>
        <li>
          <div className="newsletter-box">
            <Button className="btn bg-gray" />
          </div>
        </li>
      </ul>
      <ul class="social">
        <li id="facebook">
          <a
            href="https://www.facebook.com/alexander.gontcharov"
            title="Facebook">
            <i class="fa fa-facebook" />
            hi
          </a>
        </li>
        <li id="twitter">
          <a href="https://twitter.com/a_gontcharov" title="Twitter">
            <i class="fa fa-twitter" />
          </a>
        </li>
        <li id="skype">
          <a href="skype:alexandergoncharov?chat" title="Skype">
            <i class="fa fa-skype" />
          </a>
        </li>
        <li id="linkedin">
          <a href="https://www.linkedin.com/in/agontcharov">
            <i class="fa fa-linkedin" title="LinkedIn" />
          </a>
        </li>
        <li id="github">
          <a href="https://github.com/AGontcharov" title="GitHub">
            <i class="fa fa-github" />
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Social;
