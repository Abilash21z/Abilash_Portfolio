import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaJenkins, FaGithub, FaDocker, FaAws, 
  FaTerminal, FaCode, FaLock, FaPython
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiMicrosoftazure, SiGrafana, SiRedis, SiGooglecloud, SiPowerbi } from 'react-icons/si';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 0;
  position: relative;
  width: 100%;
`;

const ScrollTrack = styled.div`
  display: inline-flex;
  animation: autoScroll 40s linear infinite;
  
  @keyframes autoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const SkillCategoryCard = styled(Card)`
  width: 280px;
  height: 280px;
  margin-right: 20px;
  white-space: normal;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 240px;
    height: 260px;
  }
  
  .card-header {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    h4 {
      line-height: 1.2;
      font-size: 1rem;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
  
  .card-body {
    height: 210px;
    overflow: hidden;
    
    @media (max-width: 768px) {
      height: 190px;
    }
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--bs-gray-200);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--bs-light);
    transform: translateX(5px);
    border-radius: 4px;
    padding-left: 10px;
  }
  
  .skill-icon {
    font-size: 1.5rem;
    margin-right: 12px;
    min-width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }
  
  &:hover .skill-icon {
    transform: scale(1.1);
  }
  
  h6 {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }
  
  &:hover h6 {
    color: var(--bs-primary);
    font-weight: 500;
  }
`;

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
        { name: "Microsoft Azure", icon: <SiMicrosoftazure className="skill-icon text-primary" />, url: "https://azure.microsoft.com/en-us/documentation/" },
        { name: "AWS", icon: <FaAws className="skill-icon text-warning" />, url: "https://docs.aws.amazon.com/" },
        { name: "GCP", icon: <SiGooglecloud className="skill-icon text-info" />, url: "https://cloud.google.com/docs" }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: <SiTerraform className="skill-icon text-purple" />, url: "https://www.terraform.io/docs" },
        { name: "ARM Templates", icon: <SiMicrosoftazure className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/" },
        { name: "Bicep", icon: <SiMicrosoftazure className="skill-icon text-info" />, url: "https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/" }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "Azure DevOps", icon: <SiMicrosoftazure className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/devops/" },
        { name: "GitHub Actions", icon: <FaGithub className="skill-icon text-dark" />, url: "https://docs.github.com/en/actions" },
        { name: "Jenkins", icon: <FaJenkins className="skill-icon text-primary" />, url: "https://www.jenkins.io/doc/" }
      ]
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Azure Kubernetes Service", icon: <SiKubernetes className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/aks/" },
        { name: "Docker", icon: <FaDocker className="skill-icon text-info" />, url: "https://docs.docker.com/" },
        { name: "Redis Cache", icon: <SiRedis className="skill-icon text-danger" />, url: "https://redis.io/documentation" }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Azure Data Factory", icon: <SiMicrosoftazure className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/data-factory/" },
        { name: "Synapse Analytics", icon: <SiMicrosoftazure className="skill-icon text-info" />, url: "https://docs.microsoft.com/en-us/azure/synapse-analytics/" },
        { name: "Databricks", icon: <SiMicrosoftazure className="skill-icon text-warning" />, url: "https://docs.databricks.com/" }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Grafana", icon: <SiGrafana className="skill-icon text-warning" />, url: "https://grafana.com/docs/" },
        { name: "Azure Monitor", icon: <SiMicrosoftazure className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/azure-monitor/" },
        { name: "Power BI", icon: <SiPowerbi className="skill-icon text-info" />, url: "https://docs.microsoft.com/en-us/power-bi/" }
      ]
    },
    {
      title: "Security & Governance",
      skills: [
        { name: "Azure Policy", icon: <FaLock className="skill-icon text-warning" />, url: "https://docs.microsoft.com/en-us/azure/governance/policy/" },
        { name: "Azure Key Vault", icon: <FaLock className="skill-icon text-primary" />, url: "https://docs.microsoft.com/en-us/azure/key-vault/" },
        { name: "Purview", icon: <SiMicrosoftazure className="skill-icon text-info" />, url: "https://docs.microsoft.com/en-us/azure/purview/" }
      ]
    },
    {
      title: "Development & Scripting",
      skills: [
        { name: "YAML", icon: <FaCode className="skill-icon text-primary" />, url: "https://yaml.org/spec/" },
        { name: "Bash/PowerShell", icon: <FaTerminal className="skill-icon text-secondary" />, url: "https://docs.microsoft.com/en-us/powershell/" },
        { name: "Python", icon: <FaPython className="skill-icon text-dark" />, url: "https://docs.python.org/" }
      ]
    }
  ];

  // Duplicate the array for seamless infinite scrolling
  const duplicatedSkillCategories = [...skillCategories, ...skillCategories];

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
      
      <ScrollContainer>
        <ScrollTrack>
          {duplicatedSkillCategories.map((category, index) => (
            <SkillCategoryCard key={index} className="border-0 shadow-sm spotlight-card">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0 text-center">{category.title}</h4>
              </Card.Header>
              <Card.Body>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skillIndex}
                    onClick={() => window.open(skill.url, '_blank', 'noopener,noreferrer')}
                    title={`Learn more about ${skill.name} - Click to open documentation`}
                  >
                    {skill.icon}
                    <h6>{skill.name}</h6>
                  </SkillItem>
                ))}
              </Card.Body>
            </SkillCategoryCard>
          ))}
        </ScrollTrack>
      </ScrollContainer>
    </Container>
  );
};

export default Skills;