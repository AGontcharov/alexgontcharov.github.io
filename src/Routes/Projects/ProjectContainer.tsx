// Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type Props = {
  name: string;
  image: string;
  imageAlt: string;
  sub: string;
  description: string;
  githubLink: string;
};

const ProjectContainer = (props: Props) => {
  const { image, imageAlt, name, sub, description, githubLink } = props;

  return (
    <Container style={{ marginBottom: '64px' }}>
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
              <Button variant="info">Learn More</Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectContainer;
