import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                Hello, I'm Abilash S, an Associate DevOps Engineer (Senior Specialist) at DHL IT Services with a solid foundation in Azure Cloud, Terraform, and CI/CD pipelines. Based in Coimbatore, India, I've been promoted twice within DHL, demonstrating my commitment to excellence and continuous growth.
              </p>

              <h4 className="mt-4">Professional Journey</h4>
              <p>
                Since July 2022, I've been contributing to DHL IT Services, where I've played pivotal roles in building BI platforms, designing AKS clusters for ML models, and migrating legacy systems. My experience spans across the eCS – BRS Platform for DHL eCommerce, the Merlin AI/ML project, and the Manhattan Active Migration.
              </p>
              <p>
                I specialize in enhancing platform security using DevSecOps practices, integrating Azure services like Power BI and Synapse Analytics, and implementing CI/CD pipelines for standardized deployments.
              </p>

              <h4 className="mt-4">DevOps Excellence</h4>
              <p>
                My approach to DevOps revolves around automation, security, and scalability. I drive DevSecOps culture through Terraform security modules, Azure Policy implementation, and comprehensive monitoring solutions. As an Employee of the Quarter (Oct–Dec 2023), I've proven my ability to deliver high-impact results.
              </p>

              <h4 className="mt-4">Certifications & Expertise</h4>
              <p>
                I hold multiple industry certifications including AZ-400 (DevOps Engineer Expert), AZ-104 (Azure Administrator), AZ-900 (Azure Fundamentals), and AWS Cloud Practitioner. Currently preparing for the Certified Kubernetes Administrator (CKA) certification to further enhance my container orchestration skills.
              </p>

              <h4 className="mt-4">Beyond Engineering</h4>
              <p>
                I believe in knowledge sharing and community contribution. I've conducted Go Teach Cloud Workshops at educational institutions, facilitated team-building sessions, and created company-wide showcase videos. My commitment extends beyond technical excellence to mentoring and enabling others in their cloud journey.
              </p>

              <h4 className="mt-4">Let's Connect</h4>
              <p>
                Feel free to reach out via email at <a href="mailto:abilash.work21@gmail.com">abilash.work21@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/abilash-s-2aba3516b/" target="_blank" rel="noopener noreferrer"><u>LinkedIn</u></a>. I'm always open to collaboration, discussions about DevOps practices, and new opportunities in cloud engineering.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;