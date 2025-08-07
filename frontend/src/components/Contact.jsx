import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="lead mb-5">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row className="text-center">
                <Col md={3} className="mb-3 mb-md-0">
                  <div className="d-flex flex-column align-items-center">
                    <FaEnvelope className="mb-2 text-primary" size={32} />
                    <h6 className="mb-1">Email</h6>
                    <p className="mb-0 small">
                      <a href="mailto:abilash.work21@gmail.com" className="text-decoration-none">
                        abilash.work21@gmail.com
                      </a>
                    </p>
                  </div>
                </Col>
                
                <Col md={3} className="mb-3 mb-md-0">
                  <div className="d-flex flex-column align-items-center">
                    <FaLinkedin className="mb-2 text-primary" size={32} />
                    <h6 className="mb-1">LinkedIn</h6>
                    <p className="mb-0 small">
                      <a href="https://www.linkedin.com/in/abilash-s-2aba3516b/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        Connect with me
                      </a>
                    </p>
                  </div>
                </Col>
                
                <Col md={3} className="mb-3 mb-md-0">
                  <div className="d-flex flex-column align-items-center">
                    <FaGithub className="mb-2 text-primary" size={32} />
                    <h6 className="mb-1">GitHub</h6>
                    <p className="mb-0 small">
                      <a href="https://github.com/Abilash21z" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        View my projects
                      </a>
                    </p>
                  </div>
                </Col>
                
                <Col md={3}>
                  <div className="d-flex flex-column align-items-center">
                    <FaMapMarkerAlt className="mb-2 text-primary" size={32} />
                    <h6 className="mb-1">Location</h6>
                    <p className="mb-0 small">
                      <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu,+India" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        Coimbatore, India
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;