import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaJenkins, FaGithub, FaDocker, FaAws, 
<<<<<<< Updated upstream
  FaTerminal, FaCode, FaLock 
=======
  FaTerminal, FaCode, FaLock
>>>>>>> Stashed changes
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiMicrosoftazure, SiGrafana, SiRedis, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
  React.useEffect(() => {
    const cards = document.querySelectorAll('.spotlight-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      });
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
      });
    };
  }, []);
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "Microsoft Azure", icon: <SiMicrosoftazure className="skill-icon text-primary" /> },
        { name: "AWS", icon: <FaAws className="skill-icon text-warning" /> },
        { name: "Google Cloud Platform", icon: <SiGooglecloud className="skill-icon text-info" /> }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: <SiTerraform className="skill-icon text-purple" /> },
        { name: "ARM Templates", icon: <SiMicrosoftazure className="skill-icon text-primary" /> },
        { name: "Bicep", icon: <SiMicrosoftazure className="skill-icon text-info" /> }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "Azure DevOps", icon: <SiMicrosoftazure className="skill-icon text-primary" /> },
        { name: "GitHub Actions", icon: <FaGithub className="skill-icon text-dark" /> },
        { name: "Jenkins", icon: <FaJenkins className="skill-icon text-primary" /> }
      ]
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Azure Kubernetes Service", icon: <SiKubernetes className="skill-icon text-primary" /> },
        { name: "Docker", icon: <FaDocker className="skill-icon text-info" /> },
        { name: "Redis Cache", icon: <SiRedis className="skill-icon text-danger" /> }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Azure Data Factory", icon: <SiMicrosoftazure className="skill-icon text-primary" /> },
        { name: "Synapse Analytics", icon: <SiMicrosoftazure className="skill-icon text-info" /> },
        { name: "Azure Databricks", icon: <SiMicrosoftazure className="skill-icon text-warning" /> }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Grafana", icon: <SiGrafana className="skill-icon text-warning" /> },
        { name: "Azure Monitor", icon: <SiMicrosoftazure className="skill-icon text-primary" /> },
        { name: "Power BI", icon: <SiMicrosoftazure className="skill-icon text-info" /> }
      ]
    },
    {
      title: "Security & Governance",
      skills: [
        { name: "Azure Policy", icon: <FaLock className="skill-icon text-warning" /> },
        { name: "Azure Key Vault", icon: <FaLock className="skill-icon text-primary" /> },
        { name: "Microsoft Purview", icon: <FaLock className="skill-icon text-info" /> }
      ]
    },
    {
      title: "Development & Scripting",
      skills: [
        { name: "YAML", icon: <FaCode className="skill-icon text-primary" /> },
        { name: "Bash/PowerShell", icon: <FaTerminal className="skill-icon text-secondary" /> },
        { name: "JSON/REST APIs", icon: <FaCode className="skill-icon text-dark" /> }
      ]
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="lead mb-5">
            My technical expertise spans Azure Cloud infrastructure, DevSecOps practices, and data platform engineering,
            enabling me to build secure, scalable, and automated solutions.
          </p>
        </Col>
      </Row>
      {skillCategories.map((category, index) => (
        <Row key={index} className="mb-5">
          <Col xs={12}>
            <h3 className="mb-4 reveal">{category.title}</h3>
          </Col>
          {category.skills.map((skill, skillIndex) => (
            <Col key={skillIndex} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm reveal spotlight-card">
                <Card.Body className="text-center p-4">
                  {skill.icon}
                  <h4 className="mt-3">{skill.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Skills;
