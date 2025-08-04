import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub} from 'react-icons/fa';


const Projects = () => {
  const projects = [
    {
      title: "eCS – BRS Platform (DHL eCommerce)",
      description: "Built a comprehensive BI Platform for data processing and transformation, enhancing platform security using DevSecOps practices and integrating Azure services for automated reporting workflows.",
      image: "project1.jpg",
      tags: ["Azure", "Terraform", "Power BI", "Synapse Analytics", "Azure Data Factory", "DevSecOps"],
      github: "#",
      outcomes: "Led project space setup and use case onboarding, implemented Terraform security modules and Azure Policy guardrails, integrated Power BI and Synapse Analytics with ADF for automated reporting."
    },
    {
      title: "Merlin (AI/ML Project)",
      description: "Designed and maintained Azure Kubernetes Service clusters and Redis cache infrastructure to host machine learning models with standardized CI/CD deployment pipelines.",
      image: "project2.jpg",
      tags: ["AKS", "Redis", "CI/CD", "Grafana", "ML Deployment", "Azure"],
      github: "#",
      outcomes: "Successfully deployed ML models on AKS clusters, implemented CI/CD pipelines for standardized ML deployment, conducted POC for Grafana monitoring and version control strategies."
    },
    {
      title: "Manhattan Active Migration",
      description: "Migrated data from Oracle-based legacy systems to Manhattan Active platform, acting as ETL Engineer for data transformation and loading pipelines using Smart Ingest.",
      image: "project3.jpg",
      tags: ["ETL", "Smart Ingest", "Data Migration", "Oracle", "Azure", "Data Transformation"],
      github: "#",
      outcomes: "Successfully migrated legacy data systems, developed efficient ETL pipelines, bridged gaps between DevOps and data engineering responsibilities."
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Professional Projects</h2>
          <p className="lead mb-5">
            Key projects from my experience at DHL IT Services, demonstrating expertise in Azure Cloud infrastructure, 
            DevSecOps practices, and enterprise-scale platform engineering.
          </p>
        </Col>
      </Row>
      
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-4">
            <Card className="h-100 project-card border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3>{project.title}</h3>
                <div className="mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} bg="primary" className="me-2 mb-2">{tag}</Badge>
                  ))}
                </div>
                <Card.Text>{project.description}</Card.Text>
                <h5 className="mt-3">Outcomes:</h5>
                <Card.Text>{project.outcomes}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0 p-4">
                <div className="d-flex justify-content-center">
                  <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="me-2" /> GitHub
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;