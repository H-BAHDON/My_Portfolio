// Assuming ProjectCard.js

import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ imgPath, isBlog, title, description, techStack, demoLink, githubLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className="project-card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {techStack && (
          <Card.Text className="project-tech-stack">
            <strong>Tech Stack:</strong> {techStack.join(", ")}
          </Card.Text>
        )}
        <div className="project-card-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="info">GitHub</Button>
            </a>
          )}
          {isBlog ? (
            <Button variant="primary" target="_blank" href={demoLink}>
              Read More
            </Button>
          ) : (
            demoLink && (
              <Button variant="primary" target="_blank" href={demoLink}>
                Demo
              </Button>
            )
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
