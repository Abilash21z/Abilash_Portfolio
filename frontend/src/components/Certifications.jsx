import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaCertificate, FaMedal, FaUniversity } from 'react-icons/fa';
import { SiMicrosoft, SiAmazonaws, SiPostman } from 'react-icons/si';
import styled from 'styled-components';

const CertificationCard = styled(Card)`
  transition: all 0.3s ease;
  border: none;
  height: 100%;
  background: var(--card-bg);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CertIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CertificationBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(45deg, var(--accent-color), #6f42c1);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      code: "AZ-400",
      icon: <SiMicrosoft />,
      provider: "Microsoft",
      description: "Advanced DevOps practices, CI/CD pipelines, infrastructure as code, and Azure DevOps implementation.",
      level: "Expert",
      color: "#0078d4"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      code: "AZ-104",
      icon: <SiMicrosoft />,
      provider: "Microsoft",
      description: "Azure infrastructure management, virtual networks, storage, compute, and identity solutions.",
      level: "Associate",
      color: "#0078d4"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      icon: <SiMicrosoft />,
      provider: "Microsoft",
      description: "Core Azure services, cloud concepts, security, privacy, compliance, and Azure pricing.",
      level: "Fundamentals",
      color: "#0078d4"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      code: "CLF-C01",
      icon: <SiAmazonaws />,
      provider: "Amazon Web Services",
      description: "Cloud fundamentals, AWS core services, security, architecture principles, and billing.",
      level: "Foundational",
      color: "#ff9900"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      code: "API-EXPERT",
      icon: <SiPostman />,
      provider: "Postman",
      description: "API development, testing, documentation, and automation using Postman platform.",
      level: "Expert",
      color: "#ff6c37"
    },
    {
      title: "Business English Certificate Preliminary",
      code: "BEC-P",
      icon: <FaUniversity />,
      provider: "Cambridge University",
      description: "Business English communication skills for international business environments.",
      level: "Certified",
      color: "#003366"
    }
  ];

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Expert':
        return <FaMedal style={{ color: '#ffd700' }} />;
      case 'Associate':
        return <FaAward style={{ color: '#c0392b' }} />;
      case 'Fundamentals':
      case 'Foundational':
        return <FaCertificate style={{ color: '#27ae60' }} />;
      default:
        return <FaCertificate style={{ color: '#3498db' }} />;
    }
  };

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Certifications</h2>
          <p className="lead mb-5">
            Professional certifications demonstrating expertise in cloud technologies, DevOps practices, 
            and business communication skills.
          </p>
        </Col>
      </Row>
      
      <Row>
        {certifications.map((cert, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <CertificationCard className="reveal spotlight-card">
              <CertificationBadge>{cert.level}</CertificationBadge>
              <Card.Body className="text-center p-4">
                <CertIcon style={{ color: cert.color }}>
                  {cert.icon}
                </CertIcon>
                <h4 className="mb-3">{cert.title}</h4>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  {getLevelIcon(cert.level)}
                  <span className="ms-2 fw-bold text-muted">{cert.code}</span>
                </div>
                <p className="text-muted mb-3">{cert.provider}</p>
                <p className="small">{cert.description}</p>
              </Card.Body>
            </CertificationCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certifications;
