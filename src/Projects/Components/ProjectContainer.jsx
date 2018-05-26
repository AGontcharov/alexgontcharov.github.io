// @flow
import * as React from 'react';

// Bootstrap
import Grid from 'react-bootstrap/es/Grid';
import Row from 'react-bootstrap/es/Row';
import Col from 'react-bootstrap/es/Col';
import Button from 'react-bootstrap/es/Button';

type Props = {
  name: string,
  image: string,
  imageAlt: string,
  sub: string,
  description: string,
  githubLink: string
};

const ProjectContainer = (props: Props) => {
  const { image, imageAlt, name, sub, description, githubLink } = props;

  return (
    <Grid style={{ marginBottom: '64px' }}>
      <Row>
        <Col xs={12} sm={6} className="project-image">
          <img src={image} alt={imageAlt} />
        </Col>
        <Col xs={12} sm={6}>
          <div className="description-container">
            <h3>{name}</h3>
            <p className="sub-heading">{sub}</p>
            <p>{description}</p>
            <a href={githubLink}>
              <Button bsStyle="info">Learn More</Button>
            </a>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default ProjectContainer;
