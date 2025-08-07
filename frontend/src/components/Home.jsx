import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaJenkins, FaDocker, FaAws, FaChartLine } from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';
import profilePhoto from '../assets/profile-photo.jpg'; // Add your photo to assets folder


const PurpleSpan = styled.span`
  color: #ac81c0;
`;
const HeroSection = styled.div`
  padding: 120px 0;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 575px) {
    padding: 80px 0;
  }
`;

const ProfileImage = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center top; /* This moves the image to show more of the top/head area */
  border-radius: 50%;
  border: 4px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px var(--accent-color);
  }
  
  @media (max-width: 575px) {
    width: 150px;
    height: 150px;
  }
`;

const SkillIconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;



const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <HeroSection className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <ProfileImage src={profilePhoto} alt="Profile" fluid loading="lazy" />
            </Col>
            <Col lg={8} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4 gradient-text">
                <span className="hero-header">Hey there, I'm</span><br/>
                <PurpleSpan className="hero-name">Abilash S 👋</PurpleSpan>
              </h1>
              <div className="lead mb-5 typing-animation">
                <p>I'm an Associate DevOps Engineer (Senior Specialist) at DHL IT Services with expertise in Azure Cloud, Terraform, and CI/CD pipelines. I specialize in building scalable BI platforms, AKS clusters, and driving DevSecOps culture.</p>
                <p>Let's build something awesome together! 🚀</p>
              </div>
              <div>
                <Button href="#contact" variant="primary" size="lg" className="cta-button glow-button me-3">
                  Contact Me
                </Button>
                <Button href="#resume" variant="primary" size="lg" className="cta-button glow-button">
                  View Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container className="section">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title reveal">What I Do</h2>
            <p className="lead mb-5 reveal">
              I design and implement DevOps solutions that bridge development and operations, specializing in Azure Cloud infrastructure, BI platforms, and ML deployment pipelines.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaJenkins />
              </SkillIconContainer>
              <h3>CI/CD Pipelines</h3>
              <p>Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and more.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <SiTerraform />
              </SkillIconContainer>
              <h3>Infrastructure as Code</h3>
              <p>Terraform, ARM templates, and Bicep for provisioning and managing Azure cloud resources with security modules.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaDocker />
              </SkillIconContainer>
              <h3>Container Orchestration</h3>
              <p>Azure Kubernetes Service (AKS) and Docker for hosting ML models and microservices architecture.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaAws />
              </SkillIconContainer>
              <h3>Cloud Platforms</h3>
              <p>Expertise in Microsoft Azure with hands-on experience in AWS. Specialized in BI platforms and data analytics services.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaChartLine />
              </SkillIconContainer>
              <h3>Data & Analytics</h3>
              <p>Azure Data Factory, Synapse Analytics, Power BI integration, and ETL pipeline development for data transformation.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;