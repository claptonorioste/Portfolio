import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wandergo from "../../Assets/Projects/wandergo.png";
import system from "../../Assets/Projects/system.png";
import defiquest from "../../Assets/Projects/defiquest.png";
import kaheroWeb from "../../Assets/Projects/kaheroBackoffice.png";
import homesolution from "../../Assets/Projects/homesolution.png";
import xumagis from "../../Assets/Projects/xumagis.png";
import kaheropos from "../../Assets/Projects/kaheropos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projects and<strong className="purple"> Experience </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wandergo}
              isBlog={false}
              title="Wandergo"
              description="A Planner APP for travelers using flutter and firebase "
              status="Personal Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system}
              isBlog={false}
              title="NLRC MIS"
              description="NLRC Region 10 8th Division Management Information System using Java and MySQL"
              status="Freelance Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defiquest}
              isBlog={false}
              title="Defiquests"
              description="A DeFi game built on the blockchain, designed with usuable NFTs"
              status="Software Developer | Contract"
              statusDescription="Developed the game using Phaser 3 and Solidity"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaheroWeb}
              isBlog={false}
              title="KaHero - Backoffice"
              description="Backoffice for KaHero POS using ReactJS and Firebase"
              status="Software Developer | Contract"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homesolution}
              isBlog={false}
              title="Homesolution - Backoffice"
              description="Backoffice for Homesolution using ReactJS and Firebase"
              status="Freelance Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xumagis}
              isBlog={false}
              title="XU Magis Canteen - Online Ordering System"
              description="Online Ordering System for XU Magis Canteen using ReactJS and Firebase"
              status="Freelance Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaheropos}
              isBlog={false}
              title="KaHero POS"
              description="Mobile Point of Sale System using Flutter and Firebase"
              status="Software Developer | Contract"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
