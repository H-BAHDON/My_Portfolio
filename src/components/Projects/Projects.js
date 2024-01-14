import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import chatify from "../../Assets/Projects/Screenshot 2024-01-14 at 20.21.10.png";
import bitsOfCode from "../../Assets/Projects/mmcode.png";
import editor from "../../Assets/Projects/Screenshot 2024-01-14 at 20.12.00.png";
import leaf from "../../Assets/Projects/Screenshot 2024-01-14 at 20.11.04.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeYourFuture Products"
              description="Regular meetings with the CodeYourFuture team ensure ongoing development of the CYF dashboard, ITD, and CYF API. The dashboard plays a crucial role in assisting CYF employers in managing trainees by providing real-time insights into their progress, milestones, and overall performance."
              techStack={['JavaScript', 'React', 'Docker', 'Postman', 'End-to-End testing']}
              demoLink=""
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MM-Code"
              description="MM-Code is not just a platform; it's a mission. We believe in honing programming skills through intentional, focused practice. I am thrilled to introduce a platform that blends expertise in JavaScript, SQL, and Google Cloud with a strong emphasis on authentication."
              techStack={['JavaScript', 'SQL', 'Google Cloud', 'Authentication']}
              demoLink="https://www.mmcode.io"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The Big Mouth"
              description="I collaborated with the client to implement XD designs, employing AWS Cloud, Lambda, IAM, DynamoDB, and API Gateway with React. This experience showcased my ability to translate design concepts into a robust technical solution while fostering effective collaboration."
              techStack={['AWS Cloud', 'Lambda', 'IAM', 'DynamoDB', 'Api Gateway', 'React']}
              demoLink="https://www.hackyourfuture.co.uk/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="A Class of Our Own"
              description="At Code Your Future, I tackled a common issue, proposing a user-friendly solution for trainees to set and track personal milestones. Leveraging existing code and APIs, the plan aims to empower individuals while considering user roles. Stretch goals include a public API and Lighthouse CI integration for an enhanced learning journey."
              techStack={['React', 'JavaScript', 'Node.js', 'Authentication']}
              demoLink="https://class-of-our-own-client.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
