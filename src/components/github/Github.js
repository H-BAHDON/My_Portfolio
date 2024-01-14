import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-content-center" style={{ marginRight: 0 }}>
      <Col xs={12} md={8} lg={6}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="grey">Code</strong>
        </h1>
        <GitHubCalendar
          username="H-BAHDON"
          blockSize={8}
          blockMargin={7}
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
